describe('When testing the climb module,', function () {

    beforeEach(module('climb'));

    it('it should have Climb service', function () {
        inject(function (ClimbFactory) {
            expect(ClimbFactory).toBeDefined();
        });
    });


    describe('the ClimbFactory service', function () {

        var service;

        beforeEach(inject(function (_ClimbFactory_) {
            service = _ClimbFactory_;
        }));

        it('should have a method getFeed()', function () {
            expect(service.getFeed).toBeDefined();
        });

        it('should be a function', function () {
            expect(typeof service.getFeed).toBe('function');
        });

        it('should throw an error if no feedId is provided', function () {
            expect(function() {
                service.getFeed(undefined);
            }).toThrowError('Please specify a feedId');
        });

        it('should not throw an error if feedId is provided', function () {
            expect(function() {
                service.getFeed('1111');
            }).not.toThrow();
        });

        xit('should make an HTTP request', function() {

        });

        xit('should return a promise', function() {

        });

    });
});
