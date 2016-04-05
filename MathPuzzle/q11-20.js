var bignum = require('bignum');

exports.q11 = function() {
    var count = 6 + 5;
    var result = '';

    var check = function(num) {
        var array = num.toString().split('');
        var divided_num = 0;
        for (var i=0; i<array.length; i++) {
            divided_num+=parseInt(array[i]);
        }

        if (num.mod(bignum(divided_num)) == 0) {
            return true;
        } else {
            return false;
        }
    }
    var fib = function(x, y) {
        if (check(y)) {
            count--;
            result+= String(y) + ',';
            if (count == 0){
                return;
            }
        }
        fib(y, x.add(y));
    };
    
    fib(bignum(1), bignum(2));
    return result.substr(0, result.length-1);
}
