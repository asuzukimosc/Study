"use strict";

exports.multiply0 = function(n, a) {
    if (n === 1) {
        return a;
    } else {
        return this.multiply0(n - 1, a) + a;
    }
}

exports.multiply1 = function(n, a) {
    let odd = function(n) {
        return n & 0x1;
    }
    let half = function(n) {
        return n >> 1;
    }

    if (n === 1) {
        return a;
    } else {
        let result = this.multiply1(half(n), a + a);
        if (odd(n)) {
            result = result + a;
        }
        return result;
    }
}

exports.multiply_by_15 = function(a) {
    let b = (a + a) + a;
    let c = b + b;
    return (c + c) + b;
}
