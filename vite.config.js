//详细版
import { defineConfig, loadEnv } from 'vite' // 帮手函数
import vue from '@vitejs/plugin-vue'
import path from 'path'
// element
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置name
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
//  // props 解构
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

import postCssPxToRem from 'postcss-pxtorem'
export default defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd())
  return {
    plugins: [
      vue(),
      // props 解构
      ReactivityTransform(),
      // 配置name
      vueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    css: {
      // loaderOptions: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 10,
            propList: ['*'],
          })
        ],
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
        '@': path.resolve(__dirname, './src'),
        '*': path.resolve('')
      }
    },

    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT,
      open: env.VITE_OPEN,
      proxy: {
        [env.VITE_API_PREFIX]: {
          target: env.VITE_APP_API_URL,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(env.VITE_API_PREFIX, 'i'), '')
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
