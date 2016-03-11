"use strict";

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
