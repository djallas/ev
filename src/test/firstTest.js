const assert = require('assert');

var first = require('../first');

describe('First', () => {
    it('first should return hello word', () => {
        assert.equal(first(), 'Hello World')
    })
})