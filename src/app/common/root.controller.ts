import * as ng from "angular";
import * as Module from "common/module";
import { ITestService } from "common/services";

class RootCtrl {
  constructor(
    private TestService: ITestService
  ) {
    console.log(`Called TestService from root ctrl: ${this.TestService.testMethod()}`);
  }
}

ng.module(Module.name).controller("RootCtrl", RootCtrl);