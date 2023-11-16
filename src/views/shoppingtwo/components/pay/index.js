
// import payVue from "./components/pay/index.vue"
// import ShareVue from "./components/share/index.vue"
// import SvgIcon from "@/components/SvgIcon/index.vue"
import MessageBoxVue from "@/components/MessageBox/index.js"
import { buyminxpricecard } from "@/network/shoppingCentre/shoppingtwo.js"
// import FloatingMusicWidgetVue from "@/components/FloatingMusicWidget/index.vue"
import { ref } from "vue"
import { useStore } from "@/pinia"
// const router = useRouter()
const { loginStore } = useStore()

export const Gethelowestprice = ref({}) // 支付弹框 获取最低价
export const dialogVisiblePay = ref(false) // 支付弹框弹出


/**购买信息 -- 知道商品还能不能购买 */
const initminimumPice = async (route) => {


  const res = await buyminxpricecard({ vaultId: route.query.vaultId })
  Gethelowestprice.value = res.data

}

/**
 *
 * @param {*} onSellingCount 商城二级页面 上面判断是不是已售罄
 * @param {*} route 路由
 * @returns
 */
export const onePieceBuyin = async (route, onSellingCount = null) => {

  await initminimumPice(route)

  const Mymap = new Map([
    [
      !loginStore.token,
      () => {
        MessageBoxVue({
          title: "请先登录"
        })
        loginStore.login = true
      }
    ],
    [
      onSellingCount == 0,
      () => {
        MessageBoxVue({
          title: "已售罄"
        })
      }
    ],
    [
      !Gethelowestprice.value,
      () => {
        MessageBoxVue({
          title: "没有找到最低价"
        })
      }
    ]
  ])
  let Myreturn = false
  for (let [key, value] of Mymap) {
    if (key) {
      Myreturn = true
      value()
    }
  }

  if (Myreturn) return

  dialogVisiblePay.value = true
}