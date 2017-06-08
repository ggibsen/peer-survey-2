var assert = require('assert');

describe('mathHooks', function () {
    before(function () {
        console.log('before');
    });

    after(function () {
        console.log('after');
    });

    beforeEach(function () {
        console.log('starting next math test...');
    });

    describe('addition', function () {
        it('should return 3 when 1 and 2 added', function () {
            assert.equal(1 + 2, 3);
        });
    });

    describe('modulo', function () {
        it('should return 2 when 5 modulo 3', function () {
            assert.equal(5 % 3, 2);
        });
    });
});

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});