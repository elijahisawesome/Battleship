const { expect, test } = require('@jest/globals');
const ship = require('./ship.js');

beforeEach(()=>{
    testShip = ship(5);
})

test('get ship length', ()=>{
    expect(ship(5).getLength()).toBe(5);
})

test('get ship sections', ()=>{
    expect(testShip.getSections()).toEqual(expect.arrayContaining([{hit:false},{hit:false},{hit:false},{hit:false},{hit:false}]));
})

test('test ship hit', ()=>{
    testShip.registerHit(4);
    expect(testShip.getSection(4)).toEqual(true);
    expect(testShip.getSection(5)).toEqual(false);
    expect(testShip.getSection(3)).toEqual(false);
})

test('test ship sinking', ()=>{
    for(let x = 1; x <5; x++){
    testShip.registerHit(x);
    }
    expect(testShip.isSunk()).toBe(true);
})