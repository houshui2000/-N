// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import vueSetupExtend from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import ReactivityTransform from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/@vue-macros/reactivity-transform/dist/vite.mjs";
import postCssPxToRem from "file:///C:/Users/18538/Desktop/%E5%85%AB%E7%88%AA%E9%B1%BC%E7%A7%91%E6%8A%80/cs%E7%BF%BB%E6%8B%8D/TwoMaster/node_modules/postcss-pxtorem/index.js";
var __vite_injected_original_dirname = "C:\\Users\\18538\\Desktop\\\u516B\u722A\u9C7C\u79D1\u6280\\cs\u7FFB\u62CD\\TwoMaster";
var vite_config_default = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [
      vue(),
      // props 解构
      ReactivityTransform(),
      // 配置name
      vueSetupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    css: {
      // loaderOptions: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 10,
            propList: ["*"]
          })
        ]
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
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        "*": path.resolve("")
      }
    },
    server: {
      host: "0.0.0.0",
      port: env.VITE_PORT,
      open: env.VITE_OPEN,
      proxy: {
        [env.VITE_API_PREFIX]: {
          target: env.VITE_APP_API_URL,
          ws: true,
          changeOrigin: true,
          rewrite: (path2) => path2.replace(new RegExp(env.VITE_API_PREFIX, "i"), "")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxODUzOFxcXFxEZXNrdG9wXFxcXFx1NTE2Qlx1NzIyQVx1OUM3Q1x1NzlEMVx1NjI4MFxcXFxjc1x1N0ZGQlx1NjJDRFxcXFxUd29NYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDE4NTM4XFxcXERlc2t0b3BcXFxcXHU1MTZCXHU3MjJBXHU5QzdDXHU3OUQxXHU2MjgwXFxcXGNzXHU3RkZCXHU2MkNEXFxcXFR3b01hc3RlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTg1MzgvRGVza3RvcC8lRTUlODUlQUIlRTclODglQUElRTklQjElQkMlRTclQTclOTElRTYlOEElODAvY3MlRTclQkYlQkIlRTYlOEIlOEQvVHdvTWFzdGVyL3ZpdGUuY29uZmlnLmpzXCI7Ly9cdThCRTZcdTdFQzZcdTcyNDhcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZScgLy8gXHU1RTJFXHU2MjRCXHU1MUZEXHU2NTcwXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG4vLyBcdTkxNERcdTdGNkVuYW1lXHJcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJ1xyXG4vLyAgLy8gcHJvcHMgXHU4OUUzXHU2Nzg0XHJcbmltcG9ydCBSZWFjdGl2aXR5VHJhbnNmb3JtIGZyb20gJ0B2dWUtbWFjcm9zL3JlYWN0aXZpdHktdHJhbnNmb3JtL3ZpdGUnXHJcblxyXG5pbXBvcnQgcG9zdENzc1B4VG9SZW0gZnJvbSAncG9zdGNzcy1weHRvcmVtJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygobW9kZSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZS5tb2RlLCBwcm9jZXNzLmN3ZCgpKVxyXG4gIHJldHVybiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZ1ZSgpLFxyXG4gICAgICAvLyBwcm9wcyBcdTg5RTNcdTY3ODRcclxuICAgICAgUmVhY3Rpdml0eVRyYW5zZm9ybSgpLFxyXG4gICAgICAvLyBcdTkxNERcdTdGNkVuYW1lXHJcbiAgICAgIHZ1ZVNldHVwRXh0ZW5kKCksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBDb21wb25lbnRzKHtcclxuICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgICB9KVxyXG4gICAgXSxcclxuICAgIGNzczoge1xyXG4gICAgICAvLyBsb2FkZXJPcHRpb25zOiB7XHJcbiAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICBwb3N0Q3NzUHhUb1JlbSh7XHJcbiAgICAgICAgICAgIHJvb3RWYWx1ZTogMTAsXHJcbiAgICAgICAgICAgIHByb3BMaXN0OiBbJyonXSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO2BcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBiYXNlOiAnLi8nLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAvLyBcdThCQkVcdTdGNkVcdThERUZcdTVGODRcdTUyMkJcdTU0MERcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAgICcqJzogcGF0aC5yZXNvbHZlKCcnKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgIHBvcnQ6IGVudi5WSVRFX1BPUlQsXHJcbiAgICAgIG9wZW46IGVudi5WSVRFX09QRU4sXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgW2Vudi5WSVRFX0FQSV9QUkVGSVhdOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX0FQUF9BUElfVVJMLFxyXG4gICAgICAgICAgd3M6IHRydWUsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoZW52LlZJVEVfQVBJX1BSRUZJWCwgJ2knKSwgJycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDI0MCxcclxuICAgICAgbWluaWZ5OiAndGVyc2VyJyxcclxuICAgICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIC8vIFx1NTNCQlx1NjM4OVx1NkNFOFx1OTFDQVx1NTE4NVx1NUJCOVxyXG4gICAgICAgICAgY29tbWVudHM6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIC8vIFx1NTIwNlx1N0M3Qlx1NjI1M1x1NTMwNVxyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcclxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnc3RhdGljL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzIChpZCkge1xyXG4gICAgICAgICAgICAvLyBcdTUyMDZcdTUzMDVcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpZC50b1N0cmluZygpLnNwbGl0KCdub2RlX21vZHVsZXMvJylbMV0uc3BsaXQoJy8nKVswXS50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBRXBDLE9BQU8sb0JBQW9CO0FBRTNCLE9BQU8seUJBQXlCO0FBRWhDLE9BQU8sb0JBQW9CO0FBWjNCLElBQU0sbUNBQW1DO0FBZXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLFNBQVM7QUFDcEMsUUFBTSxNQUFNLFFBQVEsS0FBSyxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQzVDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQTtBQUFBLE1BRUosb0JBQW9CO0FBQUE7QUFBQSxNQUVwQixlQUFlO0FBQUEsTUFDZixXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUEsTUFFSCxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUCxlQUFlO0FBQUEsWUFDYixXQUFXO0FBQUEsWUFDWCxVQUFVLENBQUMsR0FBRztBQUFBLFVBQ2hCLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFHQSxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUVGO0FBQUEsSUFFQSxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUE7QUFBQSxNQUVQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxRQUNwQyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQUEsTUFDdEI7QUFBQSxJQUNGO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNLElBQUk7QUFBQSxNQUNWLE1BQU0sSUFBSTtBQUFBLE1BQ1YsT0FBTztBQUFBLFFBQ0wsQ0FBQyxJQUFJLGVBQWUsR0FBRztBQUFBLFVBQ3JCLFFBQVEsSUFBSTtBQUFBLFVBQ1osSUFBSTtBQUFBLFVBQ0osY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksaUJBQWlCLEdBQUcsR0FBRyxFQUFFO0FBQUEsUUFDMUU7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsdUJBQXVCO0FBQUEsTUFDdkIsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFFBQ2pCO0FBQUEsUUFDQSxRQUFRO0FBQUE7QUFBQSxVQUVOLFVBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBO0FBQUEsVUFFTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixhQUFjLElBQUk7QUFFaEIsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTyxHQUFHLFNBQVMsRUFBRSxNQUFNLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVM7QUFBQSxZQUN4RTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
