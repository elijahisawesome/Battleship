const { expect, test } = require('@jest/globals');
const player = require('../Player.js');

test(('Correctly signals when all ships are placed'), ()=>{
    let testPlayer = player('test', 3);

    testPlayer.addShipToBoard();
    testPlayer.addShipToBoard();
    expect(testPlayer.readyToFight()).toBe(false);
    testPlayer.addShipToBoard();
    expect(testPlayer.readyToFight()).toBe(true);
})