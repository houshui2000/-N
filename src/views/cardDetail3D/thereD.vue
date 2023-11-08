<template>
  <div class="demo">
    <!-- <span @click="asdsd" class="demo_span">xx</span> -->
  </div>
</template>
<script setup>
import * as THREE from 'three'
import { ref, onMounted, toRefs, watch } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import * as dat from 'dat.gui'
// import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
const props = defineProps({
  ThreeDKa: { type: Object, required: true }
})
const { ThreeDKa } = toRefs(props)
watch(
  ThreeDKa,
  (newVal) => {
    if (newVal.productOppositeUrl) {
      init()
      controlsCreate()
      renderLoop()
      // bindClick()

      if (import.meta.env.MODE == 'development') {
        createHelper()
      }
      createLeftt()
      createLightRight()
    }
  },
  {
    deep: true
  }
)
let downUp = ref(false)
onMounted(() => {
  // creatGUI()
  window.addEventListener('mousedown', () => {
    downUp.value = true
  })
  window.addEventListener('mouseup', () => {
    downUp.value = false
  })
  renderResize()
})
let camera, scene, cube, renderer, materialFan, controls, directionRight, axesHelper, meshBoLI, direction
const init = () => {
  scene = new THREE.Scene()
  // camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // )
  // camera.position.z = 10
  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = PcIosAn()
  // camera.position.z = 25

  camera.lookAt(scene.position)
  camera.updateProjectionMatrix()

  createCube()

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor('black', 0.1)

  function animate() {
    requestAnimationFrame(animate)
    let zhuan = 0.01
    // cube.rotation.x += 0.01
    if (!downUp.value) {
      cube.rotation.y -= zhuan
      meshBoLI.rotation.y -= zhuan
    }
    renderer.render(scene, camera)
  }
  animate()
  document.querySelector('.demo').appendChild(renderer.domElement)
}

const createHelper = () => {
  axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)
}

/**
 * 轨道控制器
 */
const controlsCreate = () => {
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.autoRotate = true //将其设为true，以自动围绕目标旋转。

  // 设置相机的大小 -- 注意每个相机的配置一样
  // controls.maxDistance = 2
  controls.minDistance = 5
}

/**循环渲染 */
const renderLoop = () => {
  renderer.render(scene, camera)
  controls.update() // update 这里只需要调用一次， 因为用的是requestAnimationFrame，会重复调用
  requestAnimationFrame(renderLoop)
}
const createCube = () => {
  const geometry = new THREE.BoxGeometry(2.8, 4, 0.1)
  const colorARR = [
    new URL('@/assets/images/ka/left.png', import.meta.url).href,
    new URL('@/assets/images/ka/left.png', import.meta.url).href,
    new URL('@/assets/images/ka/top.png', import.meta.url).href,
    new URL('@/assets/images/ka/top.png', import.meta.url).href,
    // new URL('@/assets/images/ka/zheng.png', import.meta.url).href,
    ThreeDKa.value.productFrontUrl,
    ThreeDKa.value.productOppositeUrl
  ]
  const material = colorARR.map((colorstr) => {
    const texture = new THREE.TextureLoader().load(colorstr)
    texture.colorSpace = THREE.SRGBColorSpace // 让图片加深
    // // 透明度贴图
    // const alphaTexture = new THREE.TextureLoader().load(
    //   new URL("@/assets/images/ka/opacity.jpg", import.meta.url).href
    // ) // 图片必须是黑白的
    // alphaTexture.colorSpace = THREE.SRGBColorSpace // 让图片加深

    // // 透明度贴图end
    // MeshBasicMaterial -- MeshPhongMaterial
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      color: 0xffffff,
      // opacity: 0.5,
      // shininess: 100,
      alphaMap: new THREE.TextureLoader().load(new URL('@/assets/images/ka/tie.png', import.meta.url).href), // 透明度贴图
      transparent: true //开启透明度贴图
    })
    return material
  })
  cube = new THREE.Mesh(geometry, material)
  cube.position.x = 0
  cube.position.y = 0.5

  scene.add(cube)
  createCubeThere()
}
/**左侧灯光 */
function createLeftt() {
  const light = new THREE.AmbientLight(0xffffff, 1.5)
  scene.add(light)

  direction = new THREE.DirectionalLight(0xffffff, 1.8)
  direction.position.set(-1.3, 0.49, 7.8)
  scene.add(direction)

  // if (import.meta.env.MODE == 'development') {
  //   const helper = new THREE.DirectionalLightHelper(direction, 1)
  //   scene.add(helper)
  // }
  development(direction)
}

/**右侧灯光 */
function createLightRight() {
  directionRight = new THREE.DirectionalLight(0xffffff, 1.8)
  directionRight.position.set(2.2, 2.3, 3.2)
  scene.add(directionRight)
  development(directionRight)
}

/**
 * 线上模式 不显示辅助器
 * @param {*} directionRight
 */
const development = (directionRight) => {
  if (import.meta.env.MODE == 'development') {
    const helperRight = new THREE.DirectionalLightHelper(directionRight, 1)
    scene.add(helperRight)
  }
}
const createCubeThere = () => {
  const geometry = new THREE.BoxGeometry(3.5, 4.2, 0.2)
  const alphaTexture = new THREE.TextureLoader().load(new URL('@/assets/images/ka/boli.png', import.meta.url).href) // 图片必须是黑白的
  alphaTexture.colorSpace = THREE.SRGBColorSpace // 让图片加深
  const alphaTextureCopy = new THREE.TextureLoader().load(
    new URL('@/assets/images/ka/opacity.png', import.meta.url).href
  ) // 图片必须是黑白的
  alphaTextureCopy.colorSpace = THREE.SRGBColorSpace // 让图片加深
  const metalnessTexture = new THREE.TextureLoader().load(
    new URL('@/assets/images/ka/metalness.png', import.meta.url).href
  ) // 图片必须是黑白的
  metalnessTexture.colorSpace = THREE.SRGBColorSpace // 让图片加深

  // // 透明度贴图end MeshPhongMaterial --MeshPhysicalMaterial
  materialFan = new THREE.MeshStandardMaterial({
    // color: 0x304156,
    map: alphaTexture,
    // side: THREE.DoubleSide,
    // // shininess: 100,
    // //
    // clearcoat: 1,
    // roughness: 0,
    // //
    alphaMap: alphaTextureCopy, // 透明度贴图
    transparent: true, //开启透明度贴图
    // ==
    roughness: 0.5 // 粗糙度设置（0 光滑， 1 粗糙）
    // roughnessMap: alphaTextureCopy, // 同时设置时，上个属性建议为 1
    // metalness: 1, // 金属度（光反射的光泽程度，1 是最高）
    // metalnessMap: metalnessTexture, // 金属度贴图
  })
  meshBoLI = new THREE.Mesh(geometry, materialFan)
  meshBoLI.position.y = 0.5

  scene.add(meshBoLI)
}
// class ColorGUIHelper {
//   constructor(object, prop) {
//     this.object = object
//     this.prop = prop
//   }
//   get value() {
//     return `#${this.object[this.prop].getHexString()}`
//   }
//   set value(hexString) {
//     this.object[this.prop].set(hexString)
//   }
// }
// const homing = () => {
//   controls.reset()
// }
// const creatGUI = () => {
//   var gui = new dat.GUI()
//   // var folder1 = gui.addFolder("Flow Field")
//   // gui.add(document, "title") //  document 对象， title ： 对象中的属性
//   // gui.add(cube, "visible") // 立方体显示隐藏
//   // gui.add(controls, "reset") // 回归起点

//   // gui.add(materialFan, "clearcoat", -10, 10) // 回归起点
//   const folder = gui.addFolder('左侧灯光')
//   folder.add(direction.position, 'x', -10, 10) // 回归起点
//   folder.add(direction.position, 'y', -10, 10) // 回归起点
//   folder.add(direction.position, 'z', -10, 10) // 回归起点
//   folder.add(direction, 'intensity', -3, 3) // 回归起点
//   // intensity
//   // let MyColor = {
//   //   color: `#${direction.color.getHexString()}`,
//   // }
//   folder.addColor(new ColorGUIHelper(direction, 'color'), 'value').name('color')

//   // const colorObj = {
//   //   col: `#${cube.material.color.getHexString()}`,
//   // }
//   // gui.addColor(colorObj, "col").onChange((val) => {
//   //   // val: #ff00ff 十六进制的颜色字符串
//   //   cube.material.color = new THREE.Color(val)
//   // })
//   // folder.addColor(MyColor, "color").onChange((e) => {
//   //   console.log(new THREE.Color(e))
//   //   direction.color = new THREE.Color(e)
//   // })
//   const folderRight = gui.addFolder('右侧灯光')
//   folderRight.add(directionRight.position, 'x', -10, 10) // 回归起点
//   folderRight.add(directionRight.position, 'y', -10, 10) // 回归起点
//   folderRight.add(directionRight.position, 'z', -10, 10) // 回归起点
//   folderRight.add(directionRight, 'intensity', -3, 3) // 回归起点
//   folderRight.addColor(new ColorGUIHelper(directionRight, 'color'), 'value').name('color')

//   // gui.add(materialFan, "roughness", -10, 10) // 回归起点
//   // // gui.add(materialFan, "metalness", -10, 10) // 回归起点
//   // console.log(materialFan.clearcoat)
// }
const PcIosAn = () => {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    return 25
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    return 25
  } else {
    //pc
    return 20
  }
}
const renderResize = () => {
  // 1. 创建适配函数，监听浏览器 resize 事件
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}
</script>
<style lang="scss" scoped>
.demo {
  background: url('@/assets/images/ka/earth.png') no-repeat;
  background-size: 100% 100%;
}
</style>
