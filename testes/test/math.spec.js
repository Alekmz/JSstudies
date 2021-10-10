const assert = require('assert');
const Math = require('../math.js');

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5, 5), 10);
    });
});

// how to validate tests on asynchronous functions
// using "done" to validate
describe('Math class', function(){
    it('Sum two numbers', function(done){
        const math = new Math();

        math.sum(5, 5, value => {
            assert.equal(value, 15)
            done();
        });
    });
});

