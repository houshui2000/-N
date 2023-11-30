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
import { createHtmlPlugin } from 'vite-plugin-html'
import postCssPxToRem from 'postcss-pxtorem'

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
      createHtmlPlugin({
        /**
         * 需要注入 index.html ejs 模版的数据
         */
        inject: {
          data: {
            VITE_APP_TITLE: env.VITE_APP_TITLE,
            VITE_APP_DESCRIPTION: env.VITE_APP_DESCRIPTION,
            VITE_APP_KEYWORDS: env.VITE_APP_KEYWORDS,
          }
        }
      }),
      createSvgIconsPlugin({
        // eslint-disable-next-line no-undef
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[dir]-[name]'
      }),

    ],
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 10,
            unitPrecision: 5,
            propList: ['*'],
            minPixelValue: 1,
            mediaQuery: false,
            selectorBlackList: ['-nopx'], // 过滤掉-nopx结尾的class，不进行rem转换
            // exclude: ['node_modules']
          })
        ],
        // plugins: [loder_pxtovw]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`
        }
      },

    },

    base: '/',
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
