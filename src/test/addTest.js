
const assert = require('assert');

var add = require('../add');

describe('Add', () => {
    var result = add(5);
    it('should add 5 and return 10', () =>{
        assert.equal(result, 10);
    });
    it('It should return number',() => {
        typeof result === 'number';
    });
})