describe('When testing the climb module,', function () {

    beforeEach(module('angular-climb'));

    it('it should have Climb service', function () {
        inject(function (ClimbFactory) {
            expect(ClimbFactory).toBeDefined();
        });
    });


    describe('the ClimbFactory service', function () {

        var service;
        var $httpBackend;
        var $q;
        var deferred;

        beforeEach(inject(function (_ClimbFactory_, _$httpBackend_, _$q_) {
            service = _ClimbFactory_;
            $httpBackend = _$httpBackend_;
            $q = _$q_;

            deferred = $q.defer();
        }));

        it('should have a method getFeed().', function () {
            expect(service.getFeed).toBeDefined();
        });

        describe('has a getFeed() method that', function() {

            var FEED_ID = '55a4dac845284e58ac50ee1c';

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
                    service.getFeed(FEED_ID);
                }).not.toThrow();
            });

            it('should make a JSONP request to the Climb API server', function() {
                var url = 'http://app.climb.social/api/v1/collections/' + FEED_ID + '?callback=JSON_CALLBACK';
                $httpBackend
                    .expectJSONP(url)
                    .respond();
                service.getFeed(FEED_ID);
                $httpBackend.flush();
            });

            it('should accept a limit for the number of items to return', function () {
                var limit = 3;

                var url = 'http://app.climb.social/api/v1/collections/' + FEED_ID + '?callback=JSON_CALLBACK';
                $httpBackend
                    .expectJSONP(url)
                    .respond([
                        {title: 'a'},
                        {title: 'b'},
                        {title: 'c'},
                        {title: 'd'},
                        {title: 'e'},
                        {title: 'f'}
                    ]);

                service.getFeed(FEED_ID, limit).then(function (items) {
                    expect(items.length).toBe(limit);
                });

                $httpBackend.flush();

            });

            it('should accept a different limit for the number of items to return', function () {
                var limit = 4;

                var url = 'http://app.climb.social/api/v1/collections/' + FEED_ID + '?callback=JSON_CALLBACK';
                $httpBackend
                    .expectJSONP(url)
                    .respond([
                        {title: 'a'},
                        {title: 'b'},
                        {title: 'c'},
                        {title: 'd'},
                        {title: 'e'},
                        {title: 'f'}
                    ]);

                service.getFeed(FEED_ID, limit).then(function (items) {
                    expect(items.length).toBe(limit);
                });

                $httpBackend.flush();

            });

        });


    });
});
