'use strict';

const can_make_word = require('./ABCBlocks');

describe('ABC Blocks', () => {
  it('should return a boolean', () => {
    expect(typeof can_make_word('')).toEqual('boolean');
  });
  
  it('should return true for "A"', () => {
    expect(can_make_word('A')).toBeTruthy();
  });
  
  it('should be case insensitive', () => {
    expect(can_make_word('a')).toBeTruthy();
  });
  
  it('should return false for puctuation', () => {
    expect(can_make_word('!')).toBeFalsy();
  });
  
});
