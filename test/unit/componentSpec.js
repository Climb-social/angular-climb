describe('climb.social', function () {

  beforeEach(module('climb.social'));

  it('should have ClimbService', function () {
    inject(function (ClimbService) {
      expect(ClimbService).toBeDefined();
    });
  });

  describe('ClimbService', function () {

    var climbService;

    beforeEach(inject(function (_ClimbService_) {
        climbService = _ClimbService_;
    }));

    it('should be an object', function () {
      expect(typeof thingService).toBe('object');
    });

    it('should have a method sayHello()', function () {
      expect(thingService.sayHello).toBeDefined();
    });

    describe('sayHello()', function () {

      it('should be a function', function () {
        expect(typeof thingService.sayHello).toBe('function');
      });

      it('should return a string', function () {
        expect(typeof thingService.sayHello()).toBe('string');
      });

      it('should return \'Hello!\'', function () {
        expect(thingService.sayHello()).toEqual('Hello!');
      });
    });
  });
});
