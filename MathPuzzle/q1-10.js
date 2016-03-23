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

exports.q6 = function(max) {
    var check = function(init_number) {
        var number = init_number * 3 + 1;
        while ((number != 1) && (number != init_number)) {
            if (number % 2 == 1) {
                // odd
                number = number * 3 + 1;
            } else {
                // even
                number/=2;
            }
        }
        if (number == init_number) {
            return true;
        } else {
            return false;
        }
    }

    var cnt = 0;
    for (var i=0; i<max; i+=2) {
        if (check(i)) {
            cnt++;
        }
    }
    return cnt;
}

exports.q7 = function(start, end) {
    var start_date = new Date(start.substr(4, 2) + '/' + start.substr(6, 2) + '/' + start.substr(0,4));
    var end_date = new Date(end.substr(4, 2) + '/' + end.substr(6, 2) + '/' + end.substr(0,4));
    var current_date = start_date;
    var result = '';
    while (current_date < end_date) {
        var y = current_date.getFullYear();
        var m = current_date.getMonth() + 1;
        var d = current_date.getDate();
        m = m <= 9 ? '0' + m : m;
        d = d <= 9 ? '0' + d : d;

        var original_date = String(y) + m + d;
        var calculate_date = parseInt(original_date).toString(2);
        calculate_date = calculate_date.split('').reverse().join('');
        calculate_date = parseInt(calculate_date,2);
        
        if (original_date == calculate_date) {
            result = result ? result + ',' + original_date : original_date;
        }

        current_date.setDate(current_date.getDate() + 1);
    }

    return result;
}

exports.q8 = function(move) {

    var search = function(field, move, x, y, max) {
        if (field[x + y * max] == true) {
            return 0;
        } else {
            field[x + y * max] = true;
            if (move == 0) {
                return 1;
            } else {
                var sum = 0;
                sum += search(field.concat(), move-1, x+1, y, max);
                sum += search(field.concat(), move-1, x-1, y, max);
                sum += search(field.concat(), move-1, x, y+1, max);
                sum += search(field.concat(), move-1, x, y-1, max);
                return sum;
            }
        }
    };

    var cell = move * 2 + 1;
    var field = new Array(cell * cell);
    for(var i=0; i<field.length; i++) {
        field[i] = false;
    }
    var x = move;
    var y = move;

    return search(field.concat(), move, x, y, cell);
}

exports.q9 = function(man, woman) {
    man+=1;
    woman+=1;
    var ary = new Array(man);
    for (var i=0; i<man; i++) {
        ary[i] = new Array(woman);
        for (var j=0; j<woman; j++) {
            ary[i][j] = 0;
        }
    }
    ary[0][0] = 1;
    for (var i=0; i<man; i++) {
        for (var j=0; j<woman; j++) {
            if ((i != j) && (man - i != woman - j)) {
                if (j > 0) {
                    ary[i][j] += ary[i][j - 1];
                }
                if (i > 0) {
                    ary[i][j] += ary[i - 1][j];
                }
            }
        }
    }
    return ary[man - 2][woman - 1] + ary[man - 1][woman - 2];
}

exports.q10 = function(min, max) {
    var ary_europian = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
    var ary_american = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, 00, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];

    var sum_max = function(n, ary) {
        var ary_ref = ary.concat(ary);
        var sum_max = 0;
        for (var i=0; i<ary.length; i++) {
            var sum = 0;
            for (var j=0; j<n; j++) {
                sum+= ary_ref[i+j];
            }
            if (sum_max < sum) {
                sum_max = sum;
            }
        }
        return sum_max;
    }

    var count = 0;
    for (var n=min; n<=max; n++) {
        if (sum_max(n, ary_europian) < sum_max(n, ary_american)) {
            count++;
        }
    }
    return count;
}
