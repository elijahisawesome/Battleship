const { expect, test } = require('@jest/globals');
const Gameboard = require('./Gameboard.js');

beforeEach(()=>{
    testBoard = Gameboard();
})

test('recieve attack calls correctly', () =>{
    expect(Gameboard().grid[5][5].recieveAttack()).toBe(false)
})

test('confirm adding ship works', ()=> {
    //add ship mock//
    let coords = [{x:3,y:4},{x:3,y:5},{x:3,y:6}];
    testBoard.addShip(coords)

    expect(testBoard.grid[3][4].recieveAttack()).toBe(true);
    expect(testBoard.grid[3][7].recieveAttack()).toBe(false);
})