export const plugins = {
  autoprefixer: {},
  "postcss-px-to-viewport": {
    unitToConvert: "px",
    viewportWidth: 1920,
    unitPrecision: 2,
    propList: ["*"],
    viewportUnit: "vw",
    fontViewportUnit: "vw",
    selectorBlackList: ['.am-'],
    minPixelValue: 1,
    mediaQuery: false,
    replace: true,
    exclude: [/node_modules/],
    landscape: false // 是否处理横屏情况
  }
};