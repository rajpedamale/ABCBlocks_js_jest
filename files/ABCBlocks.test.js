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
  
  it('should return false for punctuation', () => {
    expect(can_make_word('!')).toBeFalsy();
  });
  
  it('should return true for a simple word', () => {
    expect(can_make_word('BARK')).toBeTruthy();
  });
  
  it('should return false when blocks are insufficient', () => {
    expect(can_make_word('BARKBARKBARKBARK')).toBeFalsy();
  });
  
  it('should pass the test suite', () => {
    expect(can_make_word('BOOK')).toBeFalsy();
    expect(can_make_word('TREAT')).toBeTruthy();
    expect(can_make_word('COMMON')).toBeFalsy();
    expect(can_make_word('SQUAD')).toBeTruthy();
    expect(can_make_word('CONFUSE')).toBeTruthy();
  });
});
