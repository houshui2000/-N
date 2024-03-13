// vite.config.ts
import { loadEnv, defineConfig } from "file:///D:/ZhuoMian/%E6%B5%8B%E8%AF%95V2/V3/my_ts/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/ZhuoMian/%E6%B5%8B%E8%AF%95V2/V3/my_ts/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { createHtmlPlugin } from "file:///D:/ZhuoMian/%E6%B5%8B%E8%AF%95V2/V3/my_ts/node_modules/vite-plugin-html/dist/index.mjs";
import path from "path";
import vueSetupExtend from "file:///D:/ZhuoMian/%E6%B5%8B%E8%AF%95V2/V3/my_ts/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/ZhuoMian/%E6%B5%8B%E8%AF%95V2/V3/my_ts/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import postCssPxToRem from "file:///D:/ZhuoMian/%E6%B5%8B%E8%AF%95V2/V3/my_ts/node_modules/postcss-pxtorem/index.js";
var __vite_injected_original_dirname = "D:\\ZhuoMian\\\u6D4B\u8BD5V2\\V3\\my_ts";
var NodeVersionControl = () => {
  return defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return {
      plugins: [
        vue(),
        // 配置name
        vueSetupExtend(),
        createHtmlPlugin({
          /**
           * 需要注入 index.html ejs 模版的数据
           */
          inject: {
            data: {
              VITE_APP_TITLE: env.VITE_APP_TITLE,
              VITE_APP_DESCRIPTION: env.VITE_APP_DESCRIPTION,
              VITE_APP_KEYWORDS: env.VITE_APP_KEYWORDS
            }
          }
        }),
        createSvgIconsPlugin({
          // eslint-disable-next-line no-undef
          iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
          symbolId: "icon-[dir]-[name]"
        })
      ],
      css: {
        postcss: {
          plugins: [
            postCssPxToRem({
              rootValue: 10,
              unitPrecision: 5,
              propList: ["*"],
              minPixelValue: 1,
              mediaQuery: false,
              selectorBlackList: ["-nopx"]
              // 过滤掉-nopx结尾的class，不进行rem转换
              // exclude: ['node_modules']
            })
          ]
        },
        // postcss: {
        //   plugins: [postcssPresetEnv()]
        // },
        // devSourcemap: true, // 将代码不会被压缩，将源代码赋值到打包目录
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/styles/variables.scss" as *;`
          }
        }
      },
      base: "/",
      resolve: {
        // 设置路径别名
        alias: {
          // eslint-disable-next-line no-undef
          "@": path.resolve(__vite_injected_original_dirname, "./src")
        },
        extensions: [".ts", ".js", ".vue", ".json"]
        //自动添加后缀
      },
      server: {
        host: "0.0.0.0",
        // host: 'www.test.card.cardesport.com',
        port: env.VITE_PORT,
        // port: 8080,
        open: env.VITE_OPEN,
        cors: true,
        proxy: {
          "/api": {
            target: env.VITE_APP_API_URL,
            ws: true,
            changeOrigin: true,
            rewrite: (path2) => path2.replace(/^\/api/, "")
          }
        }
      },
      build: {
        // outDir: './dist', // 打包的目录文件
        // assetsDir: 'asd', // 生成静态资源的存放路径
        // sourcemap: 'hidden', // 生成源文件
        // assetsInlineLimit: 4 * 1024,// 图片小于 4 kb 转换成 base 64 字符串
        // cssCodeSplit: true,   // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
        chunkSizeWarningLimit: 10240,
        // chunk 大小警告的限制
        minify: "terser",
        terserOptions: {
          compress: {
            keep_infinity: true,
            // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
            drop_console: true,
            // 生产环境去除 console
            drop_debugger: true
            // 生产环境去除 debugger
          },
          output: {
            // 去掉注释内容
            comments: true
          }
        },
        rollupOptions: {
          output: {
            // 分类打包
            chunkFileNames: "static/js/[name]-[hash].js",
            entryFileNames: "static/js/[name]-[hash].js",
            assetFileNames: "static/[ext]/[name]-[hash].[ext]",
            manualChunks(id) {
              if (id.includes("node_modules")) {
                return id.toString().split("node_modules/")[1].split("/")[0].toString();
              }
            }
          }
        }
      }
    };
  });
};
var vite_config_default = process.versions.node === "16.0.0" ? NodeVersionControl() : console.log(new Error("\u8BF7\u5C06node \u7248\u672C\u63A7\u5236\u5728 16.0.0\uFF0C\u9632\u6B62\u4E0D\u5FC5\u8981\u51B2\u7A81"));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxaaHVvTWlhblxcXFxcdTZENEJcdThCRDVWMlxcXFxWM1xcXFxteV90c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcWmh1b01pYW5cXFxcXHU2RDRCXHU4QkQ1VjJcXFxcVjNcXFxcbXlfdHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1podW9NaWFuLyVFNiVCNSU4QiVFOCVBRiU5NVYyL1YzL215X3RzL3ZpdGUuY29uZmlnLnRzXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWcsIENvbmZpZ0VudiwgbG9hZEVudiwgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG4vLyBpbXBvcnQgaW1wb3J0VG9DRE4gZnJvbSAndml0ZS1wbHVnaW4tY2RuLWltcG9ydCdcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG4vLyBlbGVtZW50Y1xyXG4vLyBpbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG4vLyBpbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG4vLyBpbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG4vLyBcdTkxNERcdTdGNkVuYW1lXHJcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJ1xyXG4vLyAgc3ZnXHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xyXG4vLyBcdTg5RTNcdTUxQjMgdml0ZSArIGVsZW1lbnQgXHU4QjY2XHU1NDRBXHJcbi8vIGltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xyXG5pbXBvcnQgcG9zdENzc1B4VG9SZW0gZnJvbSAncG9zdGNzcy1weHRvcmVtJ1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHRcclxuY29uc3QgTm9kZVZlcnNpb25Db250cm9sID0gKCkgPT4ge1xyXG4gIHJldHVybiBkZWZpbmVDb25maWcoKHsgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcclxuICAgIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuXHJcbiAgICAgICAgdnVlKCksXHJcbiAgICAgICAgLy8gXHU5MTREXHU3RjZFbmFtZVxyXG4gICAgICAgIHZ1ZVNldHVwRXh0ZW5kKCksXHJcbiAgICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIFx1OTcwMFx1ODk4MVx1NkNFOFx1NTE2NSBpbmRleC5odG1sIGVqcyBcdTZBMjFcdTcyNDhcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgaW5qZWN0OiB7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBWSVRFX0FQUF9USVRMRTogZW52LlZJVEVfQVBQX1RJVExFLFxyXG4gICAgICAgICAgICAgIFZJVEVfQVBQX0RFU0NSSVBUSU9OOiBlbnYuVklURV9BUFBfREVTQ1JJUFRJT04sXHJcbiAgICAgICAgICAgICAgVklURV9BUFBfS0VZV09SRFM6IGVudi5WSVRFX0FQUF9LRVlXT1JEUyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZnJyldLFxyXG4gICAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgIF0sXHJcbiAgICAgIGNzczoge1xyXG4gICAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgcG9zdENzc1B4VG9SZW0oe1xyXG4gICAgICAgICAgICAgIHJvb3RWYWx1ZTogMTAsXHJcbiAgICAgICAgICAgICAgdW5pdFByZWNpc2lvbjogNSxcclxuICAgICAgICAgICAgICBwcm9wTGlzdDogWycqJ10sXHJcbiAgICAgICAgICAgICAgbWluUGl4ZWxWYWx1ZTogMSxcclxuICAgICAgICAgICAgICBtZWRpYVF1ZXJ5OiBmYWxzZSxcclxuICAgICAgICAgICAgICBzZWxlY3RvckJsYWNrTGlzdDogWyctbm9weCddLCAvLyBcdThGQzdcdTZFRTRcdTYzODktbm9weFx1N0VEM1x1NUMzRVx1NzY4NGNsYXNzXHVGRjBDXHU0RTBEXHU4RkRCXHU4ODRDcmVtXHU4RjZDXHU2MzYyXHJcbiAgICAgICAgICAgICAgLy8gZXhjbHVkZTogWydub2RlX21vZHVsZXMnXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHBvc3Rjc3M6IHtcclxuICAgICAgICAvLyAgIHBsdWdpbnM6IFtwb3N0Y3NzUHJlc2V0RW52KCldXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBkZXZTb3VyY2VtYXA6IHRydWUsIC8vIFx1NUMwNlx1NEVFM1x1NzgwMVx1NEUwRFx1NEYxQVx1ODhBQlx1NTM4Qlx1N0YyOVx1RkYwQ1x1NUMwNlx1NkU5MFx1NEVFM1x1NzgwMVx1OEQ0Qlx1NTAzQ1x1NTIzMFx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVxyXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAdXNlIFwiQC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIiBhcyAqO2BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgYmFzZTogJy8nLFxyXG4gICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgLy8gXHU4QkJFXHU3RjZFXHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4dGVuc2lvbnM6IFsnLnRzJywgJy5qcycsICcudnVlJywgJy5qc29uJ10gLy9cdTgxRUFcdTUyQThcdTZERkJcdTUyQTBcdTU0MEVcdTdGMDBcclxuICAgICAgfSxcclxuICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICAgIC8vIGhvc3Q6ICd3d3cudGVzdC5jYXJkLmNhcmRlc3BvcnQuY29tJyxcclxuICAgICAgICBwb3J0OiBlbnYuVklURV9QT1JUIGFzIGFueSxcclxuICAgICAgICAvLyBwb3J0OiA4MDgwLFxyXG4gICAgICAgIG9wZW46IGVudi5WSVRFX09QRU4sXHJcbiAgICAgICAgY29yczogdHJ1ZSxcclxuICAgICAgICBwcm94eToge1xyXG4gICAgICAgICAgJy9hcGknOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogZW52LlZJVEVfQVBQX0FQSV9VUkwsXHJcbiAgICAgICAgICAgIHdzOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSxcclxuICAgICAgYnVpbGQ6IHtcclxuICAgICAgICAvLyBvdXREaXI6ICcuL2Rpc3QnLCAvLyBcdTYyNTNcdTUzMDVcdTc2ODRcdTc2RUVcdTVGNTVcdTY1ODdcdTRFRjZcclxuICAgICAgICAvLyBhc3NldHNEaXI6ICdhc2QnLCAvLyBcdTc1MUZcdTYyMTBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTc2ODRcdTVCNThcdTY1M0VcdThERUZcdTVGODRcclxuICAgICAgICAvLyBzb3VyY2VtYXA6ICdoaWRkZW4nLCAvLyBcdTc1MUZcdTYyMTBcdTZFOTBcdTY1ODdcdTRFRjZcclxuICAgICAgICAvLyBhc3NldHNJbmxpbmVMaW1pdDogNCAqIDEwMjQsLy8gXHU1NkZFXHU3MjQ3XHU1QzBGXHU0RThFIDQga2IgXHU4RjZDXHU2MzYyXHU2MjEwIGJhc2UgNjQgXHU1QjU3XHU3QjI2XHU0RTMyXHJcbiAgICAgICAgLy8gY3NzQ29kZVNwbGl0OiB0cnVlLCAgIC8vIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NTc4Qlx1OEY5M1x1NTFGQVx1NjU4N1x1NEVGNlx1NTNFRlx1ODBGRFx1NEYxQVx1NUY4OFx1NjE2Mlx1RkYwQ1x1NTZFMFx1NkI2NFx1Nzk4MVx1NzUyOFx1OEJFNVx1NTI5Rlx1ODBGRFx1NTNFRlx1ODBGRFx1NEYxQVx1NjNEMFx1OUFEOFx1NTkyN1x1NTc4Qlx1OTg3OVx1NzZFRVx1NzY4NFx1Njc4NFx1NUVGQVx1NjAyN1x1ODBGRFx1MzAwMlxyXG4gICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAyNDAsIC8vIGNodW5rIFx1NTkyN1x1NUMwRlx1OEI2Nlx1NTQ0QVx1NzY4NFx1OTY1MFx1NTIzNlxyXG4gICAgICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcblxyXG4gICAgICAgIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsIC8vIFx1OTYzMlx1NkI2MiBJbmZpbml0eSBcdTg4QUJcdTUzOEJcdTdGMjlcdTYyMTAgMS8wXHVGRjBDXHU4RkQ5XHU1M0VGXHU4MEZEXHU0RjFBXHU1QkZDXHU4MUY0IENocm9tZSBcdTRFMEFcdTc2ODRcdTYwMjdcdTgwRkRcdTk1RUVcdTk4OThcclxuICAgICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLCAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTUzQkJcdTk2NjQgY29uc29sZVxyXG4gICAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLCAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTUzQkJcdTk2NjQgZGVidWdnZXJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgLy8gXHU1M0JCXHU2Mzg5XHU2Q0U4XHU5MUNBXHU1MTg1XHU1QkI5XHJcbiAgICAgICAgICAgIGNvbW1lbnRzOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgLy8gXHU1MjA2XHU3QzdCXHU2MjUzXHU1MzA1XHJcbiAgICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdzdGF0aWMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsXHJcbiAgICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICAgIC8vIFx1NTIwNlx1NTMwNVxyXG4gICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvJylbMV0uc3BsaXQoJy8nKVswXS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZiwgbm8tY29uc29sZVxyXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzLnZlcnNpb25zLm5vZGUgPT09IFwiMTYuMC4wXCIgPyBOb2RlVmVyc2lvbkNvbnRyb2woKSA6IGNvbnNvbGUubG9nKG5ldyBFcnJvcignXHU4QkY3XHU1QzA2bm9kZSBcdTcyNDhcdTY3MkNcdTYzQTdcdTUyMzZcdTU3MjggMTYuMC4wXHVGRjBDXHU5NjMyXHU2QjYyXHU0RTBEXHU1RkM1XHU4OTgxXHU1MUIyXHU3QTgxJykpXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFnQyxTQUFTLG9CQUFvQjtBQUU3RCxPQUFPLFNBQVM7QUFFaEIsU0FBUyx3QkFBd0I7QUFFakMsT0FBTyxVQUFVO0FBTWpCLE9BQU8sb0JBQW9CO0FBRTNCLFNBQVMsNEJBQTRCO0FBR3JDLE9BQU8sb0JBQW9CO0FBbEIzQixJQUFNLG1DQUFtQztBQXFCekMsSUFBTSxxQkFBcUIsTUFBTTtBQUMvQixTQUFPLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBNkI7QUFDdkQsVUFBTSxNQUFNLFFBQVEsTUFBTSxR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
