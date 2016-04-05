var assert = require('assert');
var func = require('../q11-20');

describe('q11', function(){
    var ans='2,3,5,8,21,144,2584,14930352,86267571272,498454011879264,160500643816367088';
    it ('answer=' + ans, function() {
        console.log('AAA' + func.q11());
        assert.equal(func.q11(), ans);
    });
});
