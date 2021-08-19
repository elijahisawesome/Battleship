const { expect, test } = require('@jest/globals');
const Gameboard = require('../Gameboard.js');
const Ship = require('../ship.js');
const player = require('../Player.js');

beforeEach(()=>{
    testPlayer = player('player', 4);
    testBoard = Gameboard(testPlayer);
})

test('recieve attack calls correctly', () =>{
    expect(Gameboard(testPlayer).grid[5][5].recieveAttack()).toBe(false)
})

test('confirm adding ship works', ()=> {
    //add ship mock//
    let coords = [{x:3,y:4},{x:3,y:5},{x:3,y:6}];
    let myShip = Ship(3);
    testBoard.addShip(coords,myShip);

    expect(testBoard.grid[3][4].recieveAttack()).toBe(true);
    expect(testBoard.grid[3][7].recieveAttack()).toBe(false);
})

test('confirm ship gets hit',()=>{
    let coords = [{x:3,y:4},{x:3,y:5},{x:3,y:6}];
    let myShip = Ship(3);
    testBoard.addShip(coords, myShip);

    testBoard.grid[3][5].recieveAttack();
    testBoard.grid[3][4].recieveAttack();
    expect(myShip.isSunk()).toBe(false);
    testBoard.grid[3][6].recieveAttack();
    expect(myShip.isSunk()).toBe(true);

})