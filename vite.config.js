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

import postCssPxToRem from 'postcss-pxtorem'
// vw
// import pxtovw from 'postcss-px-to-viewport'
// const loder_pxtovw = pxtovw({
//   //这里是设计稿宽度 自己修改
//   viewportWidth: 1920,
//   viewportUnit: 'vw'
// })
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
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 10,
            unitPrecision: 5,
            propList: ['*'],
            minPixelValue: 1,
            mediaQuery: true,
            'postcss-px-to-viewport': {
              unitToConvert: 'px',  // 需要转换的单位，默认为"px"
              viewportWidth: 320, //  设计稿的视口宽度
              unitPrecision: 5, // 单位转换后保留的精度
              propList: ['*'], // 能转化为vw的属性列表
              viewportUnit: 'vw', //  希望使用的视口单位
              fontViewportUnit: 'vw', // 字体使用的视口单位
              selectorBlackList: [], // 需要忽略的CSS选择器 
              minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
              mediaQuery: false, // 媒体查询里的单位是否需要转换单位
              replace: true, // 是否直接更换属性值，而不添加备用属性
              exclude: [], // 忽略某些文件夹下的文件或特定文件
              include: undefined,  // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
              landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
              landscapeUnit: 'vw' // 横屏时使用的单位
            },
             'postcss-preset-env': {
              browsers: 'last 2 versions' //指定只对最近 2 个版本的浏览器进行兼容性处理。
            }
            // exclude: ['node_modules']
          })
        ],
        // plugins: [loder_pxtovw]
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
