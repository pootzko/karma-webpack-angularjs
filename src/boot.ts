import * as app from "./app/app";

console.log("I NEVER OUTPUT TO CONSOLE THROUGH KARMA"); // This never gets written to the console

if (module.hot) { // Init Webpack Hot-Swap
  module.hot.accept("./app/app", () => { app; });
}
