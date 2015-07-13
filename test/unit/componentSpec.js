describe('When testing the Climb Provider,', function () {

    var provider;

    beforeEach(module('climb', function( ClimbProvider ) {
        provider = ClimbProvider;
    }));

    it('should have a setFeedId()', inject(function () {
        expect(provider.setFeedId).toBeDefined();
    }));

    describe('setFeedId()', function() {

        it('should be a function', function () {
            expect(typeof provider.setFeedId).toBe('function');
        });

    });

    describe('the factory method', function() {

        describe('getContent()', function() {

            it('should be defined', inject(function($http) {
                expect(provider.$get($http).getContent).toBeDefined();
            }));

            it('should be a function', inject(function($http) {
                expect(typeof provider.$get($http).getContent).toBe('function');
            }));

            it('should raise an error is no feed ID is set', inject(function($http) {
                expect(provider.$get($http).getContent).toThrowError('Please set a feedId');
            }));

            it('should not raise an error is a feed ID is set', inject(function($http) {
                provider.setFeedId('11111');
                expect(provider.$get($http).getContent).not.toThrow();
            }));

            xit('should make an HTTP request', inject(function($http) {
                provider.setFeedId('11111');
            }));

            xit('should return a promise', inject(function($http) {
                provider.setFeedId('11111');
            }));

        });



    });




    //describe('Climb Service', function () {
    //
    //    var service;
    //
    //    beforeEach(inject(function (_Climb_) {
    //        climb = _Climb_;
    //    }));
    //
    //    beforeEach(module('app.config', function(theConfigProvider) {
    //        var provider = theConfigProvider;
    //        provider.mode('local');
    //    }))
    //
    //    it('should be an object', function () {
    //        expect(typeof climb).toBe('object');
    //    });
    //
    //    it('should have a method getContent()', function () {
    //        expect(climb.getContent).toBeDefined();
    //    });
    //
    //    //describe('sayHello()', function () {
    //    //
    //    //  it('should be a function', function () {
    //    //    expect(typeof thingService.sayHello).toBe('function');
    //    //  });
    //    //
    //    //  it('should return a string', function () {
    //    //    expect(typeof thingService.sayHello()).toBe('string');
    //    //  });
    //    //
    //    //  it('should return \'Hello!\'', function () {
    //    //    expect(thingService.sayHello()).toEqual('Hello!');
    //    //  });
    //    //});
    //});
});
