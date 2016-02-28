var assert = require('assert');
var multiply = require('../multiply');

describe('multiply0', function() {
    it('3 * 5', function(){
        assert.equal(multiply.multiply0(3, 5), 3 * 5);
    });
});

describe('multiply1', function() {
    it('41 * 59', function() {
        assert.equal(multiply.multiply1(41, 59), 41 * 59);
    });
});

describe('multiply_by_15', function() {
    it('3 * 15', function() {
        assert.equal(multiply.multiply_by_15(3), 3 * 15);
    });
});
