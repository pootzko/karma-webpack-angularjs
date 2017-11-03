const karmaWebpack = require("karma-webpack");
const webpackConfig = require("./webpack.config");

module.exports = function (config) {
  config.set({
    // basePath: "./",
    frameworks: ["jasmine"],

    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "app.js", // <----------------------------------------------- not sure about how to reference this 
      //"dist/app.js",
      "tests/common/*.spec.js",
      "tests/common/**/*.spec.js"
    ],

    preprocessors: {
      "app.js": ["webpack", "sourcemap"], // <----------------------------------------------- not sure about how to reference this 
      //"dist/app.js": ["webpack", "sourcemap"],
      "tests/common/*.spec.js": ["webpack", "sourcemap"],
      "tests/common/**/*.spec.js": ["webpack", "sourcemap"]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: "verbose"
    },

    reporters: ["progress", "coverage"], // , "teamcity"],

    coverageReporter: {
      dir: "coverage",
      reporters: [
        { type: "html", subdir: "html" },
        { type: "text-summary" } 
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      "PhantomJS"
      //"Chrome"
    ],
    singleRun: false,
    concurrency: Infinity,
  });
};
