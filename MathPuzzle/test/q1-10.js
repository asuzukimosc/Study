var assert = require('assert');
var func = require('../q1-10');

describe('check_palindrome', function(){
    it ('true', function() {
        assert.equal(func.check_palindrome('123454321'), true);
        assert.equal(func.check_palindrome('10101'), true);
    });
    it ('false', function() {
        assert.equal(func.check_palindrome('123456789'), false);
        assert.equal(func.check_palindrome('11001'), false);
    });
});

describe('q1', function(){
    it ('answer=585', function(){
        assert.equal(func.q1(), 585);
    });
});

describe('q2', function(){
    this.timeout(5000);
    it ('answer=5931', function() {
        assert.equal(func.q2(), 5931);
    });
});

describe('q3', function(){
    it ('answer="1, 4, 9, 16, 25, 36, 49, 64, 81, 100"', function() {
        assert.equal(func.q3(), "1, 4, 9, 16, 25, 36, 49, 64, 81, 100");
    });
});

describe('q4', function(){
    it ('n=20, m=3 => 8', function() {
        assert.equal(func.q4(20, 3), 8);
    });
    it ('n=100, m=5 => 22', function() {
        assert.equal(func.q4(100, 5), 22);
    });
});

describe('q5', function(){
    it ('input=1000, max=15, kinds=[10, 50, 100, 500] => 20 pattern', function() {
        assert.equal(func.q5(1000, 15, [10, 50, 100, 500]), 20);
    });
});

describe('q6', function(){
    it ('answer=34', function() {
        assert.equal(func.q6(10000), 34);
    });
});

describe('q7', function(){
    var answer = "19660713,19660905,19770217,19950617,20020505,20130201";
    it ('start=19641010, end=20200724', function() {
        assert.equal(func.q7('19641010', '20200724'), answer);
    });
});
