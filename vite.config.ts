/*import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
*/
import { UserConfig, ConfigEnv, loadEnv, defineConfig } from "vite";

import vue from '@vitejs/plugin-vue'
// import importToCDN from 'vite-plugin-cdn-import'
import { createHtmlPlugin } from 'vite-plugin-html'


import path from 'path'
// elementc
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置name
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
//  svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 解决 vite + element 警告
import fs from 'fs';
// import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// import postCssPxToRem from 'postcss-pxtorem'

// export default
const NodeVersionControl = () => {
  return defineConfig(({ mode }: ConfigEnv): UserConfig => {
    //   // 解决 vite + element 警告
    //   const optimizeDepsElementPlusIncludes = ["element-plus/es", '@vuemap/vue-amap/es']
    //   fs.readdirSync("node_modules/element-plus/es/components").map((dirname) => {
    //     fs.access(
    //       `node_modules/element-plus/es/components/${dirname}/style/css.mjs`,
    //       (err) => {
    //         if (!err) {
    //           optimizeDepsElementPlusIncludes.push(
    //             `element-plus/es/components/${dirname}/style/css`
    //           )
    //         }
    //       }
    //     )
    //   })
    // 解决 vite + element 警告 end

    const env = loadEnv(mode, process.cwd())
    return {
      plugins: [

        vue(),
        // 配置name
        vueSetupExtend(),
        // AutoImport({
        //   eslintrc: {
        //     enabled: false, //  Default `false`
        //     filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        //     globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        //   },
        //   resolvers: [ElementPlusResolver()],
        //   vueTemplate: true, // 是否在 vue 模板中自动导入
        // }),
        // unplugin-vue-components 警告解决
        // Components({
        //   directoryAsNamespace: true,
        //   resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
        // }),
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
            // postCssPxToRem({
            //   rootValue: 10,
            //   unitPrecision: 5,
            //   propList: ['*'],
            //   minPixelValue: 1,
            //   mediaQuery: false,
            //   selectorBlackList: ['-nopx'], // 过滤掉-nopx结尾的class，不进行rem转换
            //   // exclude: ['node_modules']
            // })
          ],
        },
        // postcss: {
        //   plugins: [postcssPresetEnv()]
        // },
        // devSourcemap: true, // 将代码不会被压缩，将源代码赋值到打包目录
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/styles/variables.scss" as *;`
          }
        },
      },

      base: '/',
      resolve: {
        // 设置路径别名
        alias: {
          // eslint-disable-next-line no-undef
          '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.vue', '.json'] //自动添加后缀
      },
      server: {
        host: '0.0.0.0',
        // host: 'www.test.card.cardesport.com',
        port: env.VITE_PORT as any,
        // port: 8080,
        open: env.VITE_OPEN,
        cors: true,
        proxy: {
          '/api': {
            target: env.VITE_APP_API_URL,
            ws: true,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          }
        }

      },
      build: {
        // outDir: './dist', // 打包的目录文件
        // assetsDir: 'asd', // 生成静态资源的存放路径
        // sourcemap: 'hidden', // 生成源文件
        // assetsInlineLimit: 4 * 1024,// 图片小于 4 kb 转换成 base 64 字符串
        // cssCodeSplit: true,   // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
        chunkSizeWarningLimit: 10240, // chunk 大小警告的限制
        minify: 'terser',

        terserOptions: {
          compress: {
            keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
            drop_console: true, // 生产环境去除 console
            drop_debugger: true, // 生产环境去除 debugger
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
            manualChunks(id) {
              // 分包
              if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString()
              }
            }
          }
        },

      }
    }
  })
}
// eslint-disable-next-line no-undef, no-console
export default process.versions.node === "16.0.0" ? NodeVersionControl() : console.log(new Error('请将node 版本控制在 16.0.0，防止不必要冲突'))
