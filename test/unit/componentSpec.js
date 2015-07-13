describe('When testing the climb module,', function () {

    beforeEach(module('climb'));

    it('it should have Climb service', function () {
        inject(function (ClimbFactory) {
            expect(ClimbFactory).toBeDefined();
        });
    });


    describe('the ClimbFactory service', function () {

        var service;
        var $httpBackend

        beforeEach(inject(function (_ClimbFactory_, _$httpBackend_) {
            service = _ClimbFactory_;
            $httpBackend = _$httpBackend_;
        }));

        it('should have a method getFeed().', function () {
            expect(service.getFeed).toBeDefined();
        });

        describe('has a getFeed() method that', function() {



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

            it('should make a JSONP request to the Climb API server', inject(function($q) {
                var FEED_ID = '1111';
                var url = 'http://climb.social/api/v1/collections/' + FEED_ID + '?callback=JSON_CALLBACK';
                $httpBackend
                    .expectJSONP(url)
                    .respond();
                service.getFeed(FEED_ID);
                $httpBackend.flush();
            }));

        });


    });
});
