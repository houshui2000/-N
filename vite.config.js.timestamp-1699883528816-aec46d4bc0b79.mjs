// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import vueSetupExtend from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import fs from "fs";
import { AntDesignVueResolver } from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import postCssPxToRem from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/master/node_modules/postcss-pxtorem/index.js";
import pxtovw from "postcss-px-to-viewport";
var __vite_injected_original_dirname = "C:\\Users\\18538\\Desktop\\\u516B\u722A\u9C7C\u79D1\u6280\\cs\u7FFB\u62CD\\master";
var loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 1920,
  viewportUnit: "vw"
});
var vite_config_default = defineConfig((mode) => {
  const optimizeDepsElementPlusIncludes = ["element-plus/es", "@vuemap/vue-amap/es"];
  fs.readdirSync("node_modules/element-plus/es/components").map((dirname) => {
    fs.access(
      `node_modules/element-plus/es/components/${dirname}/style/css.mjs`,
      (err) => {
        if (!err) {
          optimizeDepsElementPlusIncludes.push(
            `element-plus/es/components/${dirname}/style/css`
          );
        }
      }
    );
  });
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [
      vue(),
      // 配置name
      vueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      // unplugin-vue-components 警告解决
      Components({
        directoryAsNamespace: true,
        resolvers: [ElementPlusResolver(), AntDesignVueResolver()]
      }),
      createSvgIconsPlugin({
        // eslint-disable-next-line no-undef
        iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
        symbolId: "icon-[dir]-[name]"
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
      }
    },
    base: "./",
    resolve: {
      // 设置路径别名
      alias: {
        // eslint-disable-next-line no-undef
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        "*": path.resolve("")
      }
    },
    server: {
      host: "0.0.0.0",
      // host: 'test.card.cardesport.com',
      port: env.VITE_PORT,
      open: env.VITE_OPEN,
      // cors: true,
      proxy: {
        "/api": {
          target: env.VITE_APP_API_URL,
          ws: true,
          changeOrigin: true,
          // rewrite: (path) => path.replace(new RegExp(env.VITE_API_PREFIX, 'i'), '')
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 10240,
      minify: "terser",
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxODUzOFxcXFxEZXNrdG9wXFxcXFx1NTE2Qlx1NzIyQVx1OUM3Q1x1NzlEMVx1NjI4MFxcXFxjc1x1N0ZGQlx1NjJDRFxcXFxtYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDE4NTM4XFxcXERlc2t0b3BcXFxcXHU1MTZCXHU3MjJBXHU5QzdDXHU3OUQxXHU2MjgwXFxcXGNzXHU3RkZCXHU2MkNEXFxcXG1hc3RlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTg1MzgvRGVza3RvcC8lRTUlODUlQUIlRTclODglQUElRTklQjElQkMlRTclQTclOTElRTYlOEElODAvY3MlRTclQkYlQkIlRTYlOEIlOEQvbWFzdGVyL3ZpdGUuY29uZmlnLmpzXCI7Ly9cdThCRTZcdTdFQzZcdTcyNDhcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZScgLy8gXHU1RTJFXHU2MjRCXHU1MUZEXHU2NTcwXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG4vLyBlbGVtZW50Y1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG4vLyBcdTkxNERcdTdGNkVuYW1lXHJcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJ1xyXG4vLyAgc3ZnXHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xyXG4vLyBcdTg5RTNcdTUxQjMgdml0ZSArIGVsZW1lbnQgXHU4QjY2XHU1NDRBXHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xyXG5cclxuaW1wb3J0IHBvc3RDc3NQeFRvUmVtIGZyb20gJ3Bvc3Rjc3MtcHh0b3JlbSdcclxuLy8gdndcclxuaW1wb3J0IHB4dG92dyBmcm9tICdwb3N0Y3NzLXB4LXRvLXZpZXdwb3J0J1xyXG5jb25zdCBsb2Rlcl9weHRvdncgPSBweHRvdncoe1xyXG4gIC8vXHU4RkQ5XHU5MUNDXHU2NjJGXHU4QkJFXHU4QkExXHU3QTNGXHU1QkJEXHU1RUE2IFx1ODFFQVx1NURGMVx1NEZFRVx1NjUzOVxyXG4gIHZpZXdwb3J0V2lkdGg6IDE5MjAsXHJcbiAgdmlld3BvcnRVbml0OiAndncnXHJcbn0pXHJcbi8vIHZ3ZW5kXHJcblxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbi8vIGNvbnN0IHBhdGhTcmMgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKG1vZGUpID0+IHtcclxuICAvLyBcdTg5RTNcdTUxQjMgdml0ZSArIGVsZW1lbnQgXHU4QjY2XHU1NDRBXHJcbiAgY29uc3Qgb3B0aW1pemVEZXBzRWxlbWVudFBsdXNJbmNsdWRlcyA9IFtcImVsZW1lbnQtcGx1cy9lc1wiLCAnQHZ1ZW1hcC92dWUtYW1hcC9lcyddXHJcbiAgZnMucmVhZGRpclN5bmMoXCJub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHNcIikubWFwKChkaXJuYW1lKSA9PiB7XHJcbiAgICBmcy5hY2Nlc3MoXHJcbiAgICAgIGBub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvJHtkaXJuYW1lfS9zdHlsZS9jc3MubWpzYCxcclxuICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICBvcHRpbWl6ZURlcHNFbGVtZW50UGx1c0luY2x1ZGVzLnB1c2goXHJcbiAgICAgICAgICAgIGBlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy8ke2Rpcm5hbWV9L3N0eWxlL2Nzc2BcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuICB9KVxyXG4gIC8vIFx1ODlFM1x1NTFCMyB2aXRlICsgZWxlbWVudCBcdThCNjZcdTU0NEEgZW5kXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZS5tb2RlLCBwcm9jZXNzLmN3ZCgpKVxyXG4gIHJldHVybiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZ1ZSgpLFxyXG4gICAgICAvLyBcdTkxNERcdTdGNkVuYW1lXHJcbiAgICAgIHZ1ZVNldHVwRXh0ZW5kKCksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyB1bnBsdWdpbi12dWUtY29tcG9uZW50cyBcdThCNjZcdTU0NEFcdTg5RTNcdTUxQjNcclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IHRydWUsXHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpLCBBbnREZXNpZ25WdWVSZXNvbHZlcigpXSxcclxuICAgICAgfSksXHJcblxyXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZnJyldLFxyXG4gICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nXHJcbiAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIC8vIGxvYWRlck9wdGlvbnM6IHtcclxuICAgICAgLy8gICAvLyBwb3N0Y3NzOiB7XHJcbiAgICAgIC8vICAgLy8gICBwbHVnaW5zOiBbXHJcbiAgICAgIC8vICAgLy8gICAgIHBvc3RDc3NQeFRvUmVtKHtcclxuICAgICAgLy8gICAvLyAgICAgICByb290VmFsdWU6IDEwLFxyXG4gICAgICAvLyAgIC8vICAgICAgIHVuaXRQcmVjaXNpb246IDUsXHJcbiAgICAgIC8vICAgLy8gICAgICAgcHJvcExpc3Q6IFsnKiddLFxyXG4gICAgICAvLyAgIC8vICAgICAgIG1pblBpeGVsVmFsdWU6IDEsXHJcbiAgICAgIC8vICAgLy8gICAgICAgbWVkaWFRdWVyeTogdHJ1ZSxcclxuICAgICAgLy8gICAvLyAgICAgICAvLyBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcyddXHJcbiAgICAgIC8vICAgLy8gICAgIH0pXHJcbiAgICAgIC8vICAgLy8gICBdLFxyXG4gICAgICAvLyAgIC8vIHBsdWdpbnM6IFtsb2Rlcl9weHRvdnddXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICBwbHVnaW5zOiBbbG9kZXJfcHh0b3Z3XVxyXG4gICAgICB9LFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiQC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYmFzZTogJy4vJyxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgLy8gXHU4QkJFXHU3RjZFXHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgICAnKic6IHBhdGgucmVzb2x2ZSgnJylcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICAvLyBob3N0OiAndGVzdC5jYXJkLmNhcmRlc3BvcnQuY29tJyxcclxuICAgICAgcG9ydDogZW52LlZJVEVfUE9SVCxcclxuICAgICAgb3BlbjogZW52LlZJVEVfT1BFTixcclxuICAgICAgLy8gY29yczogdHJ1ZSxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgIHRhcmdldDogZW52LlZJVEVfQVBQX0FQSV9VUkwsXHJcbiAgICAgICAgICB3czogdHJ1ZSxcclxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgIC8vIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChlbnYuVklURV9BUElfUFJFRklYLCAnaScpLCAnJylcclxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAyNDAsXHJcbiAgICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcbiAgICAgIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxyXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAvLyBcdTUzQkJcdTYzODlcdTZDRThcdTkxQ0FcdTUxODVcdTVCQjlcclxuICAgICAgICAgIGNvbW1lbnRzOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAvLyBcdTUyMDZcdTdDN0JcdTYyNTNcdTUzMDVcclxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ3N0YXRpYy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcclxuICAgICAgICAgIG1hbnVhbENodW5rcyAoaWQpIHtcclxuICAgICAgICAgICAgLy8gXHU1MjA2XHU1MzA1XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaWQudG9TdHJpbmcoKS5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUVqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUVwQyxPQUFPLG9CQUFvQjtBQUUzQixTQUFTLDRCQUE0QjtBQUVyQyxPQUFPLFFBQVE7QUFDZixTQUFTLDRCQUE0QjtBQUVyQyxPQUFPLG9CQUFvQjtBQUUzQixPQUFPLFlBQVk7QUFsQm5CLElBQU0sbUNBQW1DO0FBbUJ6QyxJQUFNLGVBQWUsT0FBTztBQUFBO0FBQUEsRUFFMUIsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUNoQixDQUFDO0FBT0QsSUFBTyxzQkFBUSxhQUFhLENBQUMsU0FBUztBQUVwQyxRQUFNLGtDQUFrQyxDQUFDLG1CQUFtQixxQkFBcUI7QUFDakYsS0FBRyxZQUFZLHlDQUF5QyxFQUFFLElBQUksQ0FBQyxZQUFZO0FBQ3pFLE9BQUc7QUFBQSxNQUNELDJDQUEyQyxPQUFPO0FBQUEsTUFDbEQsQ0FBQyxRQUFRO0FBQ1AsWUFBSSxDQUFDLEtBQUs7QUFDUiwwQ0FBZ0M7QUFBQSxZQUM5Qiw4QkFBOEIsT0FBTztBQUFBLFVBQ3ZDO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBSUQsUUFBTSxNQUFNLFFBQVEsS0FBSyxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQzVDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQTtBQUFBLE1BRUosZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLFFBQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBO0FBQUEsTUFFRCxXQUFXO0FBQUEsUUFDVCxzQkFBc0I7QUFBQSxRQUN0QixXQUFXLENBQUMsb0JBQW9CLEdBQUcscUJBQXFCLENBQUM7QUFBQSxNQUMzRCxDQUFDO0FBQUEsTUFFRCxxQkFBcUI7QUFBQTtBQUFBLFFBRW5CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFBQSxRQUN4RCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWVILFNBQVM7QUFBQSxRQUNQLFNBQVMsQ0FBQyxZQUFZO0FBQUEsTUFDeEI7QUFBQTtBQUFBLE1BRUEscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFFRjtBQUFBLElBRUEsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBO0FBQUEsTUFFUCxPQUFPO0FBQUE7QUFBQSxRQUVMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxRQUNwQyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQUEsTUFDdEI7QUFBQSxJQUNGO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxNQUVOLE1BQU0sSUFBSTtBQUFBLE1BQ1YsTUFBTSxJQUFJO0FBQUE7QUFBQSxNQUVWLE9BQU87QUFBQSxRQUNMLFFBQVE7QUFBQSxVQUNOLFFBQVEsSUFBSTtBQUFBLFVBQ1osSUFBSTtBQUFBLFVBQ0osY0FBYztBQUFBO0FBQUEsVUFFZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUVGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCx1QkFBdUI7QUFBQSxNQUN2QixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYixVQUFVO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxlQUFlO0FBQUEsUUFDakI7QUFBQSxRQUNBLFFBQVE7QUFBQTtBQUFBLFVBRU4sVUFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUE7QUFBQSxVQUVOLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGFBQWMsSUFBSTtBQUVoQixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPLEdBQUcsU0FBUyxFQUFFLE1BQU0sZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUFBLFlBQ3hFO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
