import * as ng from "angular";

import "angular-cookies";
import "angular-sanitize";
import "angular-messages";

export * from "./index";

import * as Module from "common/module";

import { MyAppConfig } from "./app.config";
import { MyAppRun } from "./app.run";

export default ng.module("MyApp", [
  "ngCookies",
  "ngSanitize",
  "ngMessages",
  Module.name,
])
.config(MyAppConfig)
.run(MyAppRun);
