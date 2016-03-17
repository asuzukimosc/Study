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
