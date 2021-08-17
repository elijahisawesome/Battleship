import shipFactory from './ship.js';
import './style.css';
const gameBoard = require('./Gameboard.js');
const player = require( './Player.js');

const main = (function(){
    console.log('hey');
    gameBoard(player('player1'));
})()