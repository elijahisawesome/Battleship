const { expect, test } = require('@jest/globals');
const Gameboard = require('./Gameboard.js');



test('recieve attack calls correctly', () =>{
    expect(Gameboard()[5][5].recieveAttack()).toBe(true)
})