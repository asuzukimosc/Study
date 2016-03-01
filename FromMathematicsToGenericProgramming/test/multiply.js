var assert = require('assert');
var multiply = require('../multiply');

var test = function(func) {
    var n = 3;
    var a = 5;
    var test_name = n + ' * ' + a;
    var function_call = "multiply." + func + "(" + n + ", " + a + ")";
    it(test_name, function() {
        assert.equal(eval(function_call), n * a); 
    });
    
    n = 41;
    a = 59;
    test_name = n + ' * ' + a;
    function_call = "multiply." + func + "(" + n + ", " + a + ")";
    it(test_name, function() {
        assert.equal(eval(function_call), n * a); 
    });
}

var func = ['multiply0', 'multiply1', 'multiply2', 'multiply3', 'multiply4'];
for (var i=0; i<func.length; i++) {
    describe(func[i], function() {
        test(func[i]);
    });
}


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
