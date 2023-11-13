//详细版
import { defineConfig, loadEnv } from 'vite' // 帮手函数
import vue from '@vitejs/plugin-vue'
import path from 'path'
// elementc
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置name
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
//  svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 解决 vite + element 警告
import fs from 'fs';
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// import postCssPxToRem from 'postcss-pxtorem'
// vw
import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
  // //这里是设计稿宽度 自己修改
  // viewportWidth: 1920,
  // viewportUnit: 'vw'
  //这里是设计稿宽度 自己修改
  unitToConvert: "px", // 要转化的单位
  viewportWidth: 1920, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: [], // 指定不转换为视窗单位的类名，
  minPixelValue: 12, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况

})
// vwend


// eslint-disable-next-line no-undef
// const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig((mode) => {
  // 解决 vite + element 警告
  const optimizeDepsElementPlusIncludes = ["element-plus/es", '@vuemap/vue-amap/es']
  fs.readdirSync("node_modules/element-plus/es/components").map((dirname) => {
    fs.access(
      `node_modules/element-plus/es/components/${dirname}/style/css.mjs`,
      (err) => {
        if (!err) {
          optimizeDepsElementPlusIncludes.push(
            `element-plus/es/components/${dirname}/style/css`
          )
        }
      }
    )
  })
  // 解决 vite + element 警告 end

  // eslint-disable-next-line no-undef
  const env = loadEnv(mode.mode, process.cwd())
  return {
    plugins: [
      vue(),
      // 配置name
      vueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      // unplugin-vue-components 警告解决
      Components({
        directoryAsNamespace: true,
        resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
      }),

      createSvgIconsPlugin({
        // eslint-disable-next-line no-undef
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    css: {
      // loaderOptions: {
      //   // postcss: {
      //   //   plugins: [
      //   //     postCssPxToRem({
      //   //       rootValue: 10,
      //   //       unitPrecision: 5,
      //   //       propList: ['*'],
      //   //       minPixelValue: 1,
      //   //       mediaQuery: true,
      //   //       // exclude: ['node_modules']
      //   //     })
      //   //   ],
      //   // plugins: [loder_pxtovw]
      // },
      postcss: {
        plugins: [loder_pxtovw]
      },
      // },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`
        }
      },

    },

    base: './',
    resolve: {
      // 设置路径别名
      alias: {
        // eslint-disable-next-line no-undef
        '@': path.resolve(__dirname, './src'),
        '*': path.resolve('')
      }
    },

    server: {
      host: '0.0.0.0',
      // host: 'test.card.cardesport.com',
      port: env.VITE_PORT,
      open: env.VITE_OPEN,
      // cors: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_URL,
          ws: true,
          changeOrigin: true,
          // rewrite: (path) => path.replace(new RegExp(env.VITE_API_PREFIX, 'i'), '')
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }

    },
    build: {
      chunkSizeWarningLimit: 10240,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        output: {
          // 去掉注释内容
          comments: true
        }
      },
      rollupOptions: {
        output: {
          // 分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks (id) {
            // 分包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
})
