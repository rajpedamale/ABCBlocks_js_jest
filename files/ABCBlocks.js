'use strict';

const blocks = [
    ['B','O'],
    ['X','K'],
    ['D','Q'],
    ['C','P'],
    ['N','A'],
    ['G','T'],
    ['R','E'],
    ['T','G'],
    ['Q','D'],
    ['F','S'],
    ['J','W'],
    ['H','U'],
    ['V','I'],
    ['A','N'],
    ['O','B'],
    ['E','R'],
    ['F','S'],
    ['L','Y'],
    ['P','C'],
    ['Z','M']
];

const any = (array, fn = Boolean) => array.some(fn);

const reducer = (acc, value) => {
            return acc && any(blocks, (block) => block.includes(value) );
        };

function can_make_word(word) {
    let returnValue = true;
    if (!!word) {
        returnValue = word.
                        toUpperCase().
                        split('').
                        reduce(reducer, returnValue);
    }
    return returnValue;
}

module.exports = can_make_word;
