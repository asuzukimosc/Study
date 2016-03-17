exports.check_palindrome = function(str) {
    var half_length = Math.floor(str.length / 2);
    var first_half = str.substr(0, half_length);
    var latter_half = str.substr(-half_length);
    if (first_half === latter_half.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

exports.q1 = function() {
    var min = 10;
    var max = 1000;

    var binary, hex, decimal;
    for (var i=min; i<max; i++) {
        decimal = i.toString(10);
        hex = i.toString(8);
        binary = i.toString(2);
        if ((this.check_palindrome(decimal)) && (this.check_palindrome(hex)) && (this.check_palindrome(binary))) {
            return i;
        }
    }
    return 0;
}

exports.q2 = function() {
    var min = 1000;
    var max = 9999;
    var operator_symbol = ["*",""];
    for (var i=min; i<max; i++) {
        var c = String(i);
        var reverse = c.split("").reverse().join("");
        for (var op1=0; op1<operator_symbol.length; op1++) {
            for (var op2=0; op2<operator_symbol.length; op2++) {
                for (var op3=0; op3<operator_symbol.length; op3++) {
                    var val = c.charAt(0) + operator_symbol[op1] + c.charAt(1) + operator_symbol[op2] + c.charAt(2) + operator_symbol[op3] + c.charAt(3);
                    var ans = eval(val);
                    if ((val.length > 4) && (String(eval(val)) === reverse)){
                        return i;
                    }
                }
            }
        }
    }
    return 0;
}
