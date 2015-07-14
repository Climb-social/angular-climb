# angular-climb

Reusable module for interacting the climb.social public API.

## Dependencies

`Angular`, obviously, but that's it.

## Installation

Coming soon.

## Usage

Configure your Climb feed in the Climb admin UI. Note the `feedId`.

Add the module to your app dependencies:

    angular.module('myApp', ['climb'])
    
Use the service whenever you want it:

    function controller(Climb) {
        var vm = this;
        
        var FEED_ID = '7216e32607f244179f5c51350a2ee2c8';
        Climb.getFeed(FEED_ID).then(function(items) {
            vm.social = items;
        });
        
    }

### Example

See the [climb demo](example/index.html) in this repo for an example of how to use.
    

## Running tests

Download the project dependencies:

    $ bower install
    $ npm install
   
Then run with grunt:

    $ grunt karma:unit

## References

[Docs](http://docs.climb.social/)