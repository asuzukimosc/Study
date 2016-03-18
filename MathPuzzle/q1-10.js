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

exports.q3 = function() {
    var number = 100;
    var card = [];
    for (var i=1; i<number+1; i++) {
        card[i] = false;
    }

    for (var i=2; i<number+1; i++) {
        for (var n=i; n<number+1; n+=i) {
            card[n] = !card[n];
        }
    }

    var result = '';
    for (var i=1; i<number+1; i++) {
        if (card[i] == false) {
            if (result) {
                result += ', ' + i;
            } else {
                result = i;
            }
        }
    }
    return result;
}

exports.q4 = function(n, m) {
    var stick_length = 1;
    var count = 0;
    while (stick_length < n){
        if (stick_length < m) {
            stick_length+= stick_length;
        } else {
            stick_length+= m;
        }
        count++;
    }
    return count;
}

exports.q5 = function(input, max, kinds) {
    var kind = kinds.pop();
    if (kinds.length != 0) {
        var c = 0;
        var max_number = Math.floor(input / kind);
        for (var i=0; i<=max_number; i++) {
            c+=this.q5(input - (i * kind), max - i, kinds.concat());
        }
        return c;
    } else {
        if (input / kind <= max) {
            return 1;
        } else {
            return 0;
        }
    }
}
