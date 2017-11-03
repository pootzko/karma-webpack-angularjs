describe("Test service", function () {
  var _TestService;

  beforeEach(angular.mock.module("MyApp.Common"));
  beforeEach(angular.mock.inject(function (_TestService_) {
    // CODE NEVER GETS IN HERE
    _TestService = _TestService_;
  }));

  describe(".testMethod()", function () {
    it("returns true", function () {
      var result = _TestService.testMethod();
      expect(result).toBe("testMethodResponse");
    });
  });
});