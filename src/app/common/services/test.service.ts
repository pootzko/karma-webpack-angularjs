import * as Module from "common/module";
import { Service } from "common/decorators";
import { ITestService } from "common/services"; 

@Service(Module.name)

class TestService implements ITestService {
  public testMethod(): string {
    return "testMethodResponse";
  }
}
