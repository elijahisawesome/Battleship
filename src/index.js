import shipFactory from './ship.js';
import './style.css';
const gameBoard = require('./Gameboard.js');
const player = require( './Player.js');

const main = (function(){
    const player1 = player('player1');
    let gameBoard1 = gameBoard(player1);
    let playerBoard1 = gameBoard1.mainDiv;
    
    function init(){
        Array.from(playerBoard1.children).forEach(child =>{
            child.addEventListener('click', (event)=>{divListenHandler(event,event.target, player1, gameBoard1)})
        })
    }

    function divListenHandler(e,chunk, player, gameBoard){
        console.log(chunk);
        
        if(!player.readyToFight()){
            setupPhase(chunk, player, gameBoard);
        }
        else if(player.readyToFight()){
            fireShot(chunk, player, gameBoard);
        }
        e.stopPropagation();
        
    }

    function setupPhase(chunk, player, gameBoard){
        let newShip = player.addShipToBoard();
        //spin out to a "constructCords" function
        let coords = [{x:chunk.dataset.x, y:chunk.dataset.y}];
        if(player.isVertical()){
           for(let i = 1; i<newShip.getLength(); i++){
                coords.push({y:chunk.dataset.y, x:parseInt(chunk.dataset.x)+i})
           }
        }
        else{
            for(let i = 1; i<newShip.getLength(); i++){
                coords.push({x:chunk.dataset.x, y:parseInt(chunk.dataset.y)+i})
           } 
        }
        gameBoard.addShipI(coords, newShip);
    }

    function fireShot(chunk, player, gameBoard){

    }
    init();
})()