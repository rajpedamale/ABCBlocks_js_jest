'use strict';

const can_make_word = require('./ABCBlocks');

describe('ABC Blocks', () => {
  it('should return a boolean', () => {
    expect(typeof can_make_word()).toEqual('boolean');
  });
});
