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

const firstMatchIndex = letter => array => array.includes(letter);
const reducer = ({ blocks, returnValue }, value) => {
    if (!returnValue) return { blocks, returnValue };
  
    const indexOfMatchedBlock = blocks.findIndex(firstMatchIndex(value));
    let newBlocks, newReturnValue;
    if (indexOfMatchedBlock > -1) {
        newReturnValue = true;
        newBlocks = blocks.slice(0, indexOfMatchedBlock).
                        concat(blocks.slice(indexOfMatchedBlock+1, blocks.length));
    } else {
        newReturnValue = false;
        newBlocks = blocks;
    }
    return { blocks: newBlocks, returnValue: returnValue && newReturnValue };
};

function can_make_word(word) {
    let returnValue = false;
    if (!!word) {
        returnValue = word.
                            toUpperCase().
                            split('').
                            reduce(reducer, { blocks, returnValue: true }).
                            returnValue;
    }
    return returnValue;
}

module.exports = can_make_word;
