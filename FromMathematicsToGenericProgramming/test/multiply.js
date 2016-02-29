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

describe('multi_acc0', function() {
    it('3 * 5', function() {
        assert.equal(multiply.mult_acc0(0, 3, 5), 3 * 5);
    });
});

describe('mult_acc1', function() {
    it('3 * 5', function() {
        assert.equal(multiply.mult_acc1(0, 3, 5), 3 * 5);
    });
});

describe('mult_acc2', function() {
    it('3 * 5', function() {
        assert.equal(multiply.mult_acc2(0, 3, 5), 3 * 5);
    });
});

describe('mult_acc3', function() {
    it('3 * 5', function() {
        assert.equal(multiply.mult_acc3(0, 3, 5), 3 * 5);
    });
});

describe('mult_acc4', function() {
    it('3 * 5', function() {
        assert.equal(multiply.mult_acc4(0, 3, 5), 3 * 5);
    });
});

describe('multily2', function() {
    it('3 * 5', function() {
        assert.equal(multiply.multiply2(3, 5), 3 * 5);
    });
    it('41 * 59', function() {
        assert.equal(multiply.multiply1(41, 59), 41 * 59);
    });
});
