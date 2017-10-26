var assert = require('assert');

describe('Cannot read property \'split\' of undefined', function() {
    it('should recreate the bug', function () {
        browser.call(() => {
            return Promise.reject({
                message: "blah"
            });
        });
    });
});
