"use strict";

let odd = function(n) {
    return n & 0x1;
};
let half = function(n) {
    return n >> 1;
};

exports.multiply0 = function(n, a) {
    if (n === 1) {
        return a;
    } else {
        return this.multiply0(n - 1, a) + a;
    }
}

exports.multiply1 = function(n, a) {
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

exports.mult_acc0 = function(r, n, a) {
    if (n === 1) {
        return r + a;
    }
    if (odd(n)) {
        return this.mult_acc0(r + a, half(n), a + a);
    } else {
        return this.mult_acc0(r, half(n), a + a);
    }
}

exports.mult_acc1 = function(r, n, a) {
    if (n === 1) {
        return r + a;
    }
    if (odd(n)) {
        r = r + a;
    }
    return this.mult_acc1(r, half(n), a + a);
}

exports.mult_acc2 = function(r, n, a) {
    if (odd(n)) {
        r = r + a;
        if (n === 1) {
            return r;
        }
    }
    return this.mult_acc2(r, half(n), a + a);
}

exports.mult_acc3 = function(r, n, a) {
    if (odd(n)) {
        r = r + a;
        if (n === 1) {
            return r;
        }
    }
    n = half(n);
    a = a + a;
    return this.mult_acc3(r, n, a);
}

exports.mult_acc4 = function(r, n, a) {
    while (true) {
        if (odd(n)) {
            r = r + a;
            if (n === 1) {
                return r;
            }
        }
        n = half(n);
        a = a + a;
    }
}

exports.multiply2 = function(n, a) {
    if (n === 1) {
        return a;
    }
    return this.mult_acc4(a, n - 1, a);
}
