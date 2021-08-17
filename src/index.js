import shipFactory from './ship.js';
import './style.css';
const gameBoard = require('./Gameboard.js');
const player = require( './Player.js');

const main = (function(){
    const player1 = player('player1', 4);
    let gameBoard1 = gameBoard(player1);
    let playerBoard1 = gameBoard1.mainDiv;
    
    const player2 = player('player2', 4);
    let gameBoard2 = gameBoard(player2);
    let playerBoard2 = gameBoard2.mainDiv;

    function init(){
        const overDiv = document.createElement('div');
        overDiv.classList.add('fullBoard');

        Array.from(playerBoard1.children).forEach(child =>{
            child.addEventListener('click', (event)=>{divListenHandlerSetup(event,event.target, player1, gameBoard1)})
        })

        Array.from(playerBoard2.children).forEach(child =>{
            child.addEventListener('click', event=>{
                divListenHandlerPlay(event,event.target, player1, gameBoard2);
            }
        )})
        overDiv.append(playerBoard1, playerBoard2);
        document.body.append(overDiv);
    }

    function remover(){

    }
    function divListenHandlerSetup(e,chunk, player, gameBoard){
        console.log(chunk);
        
        if(!player.readyToFight()){
            setupPhase(chunk, player, gameBoard);
        }
        else if(player.readyToFight()){
            remover();
        }
        e.stopPropagation();
    }
    function divListenHandlerPlay(e, chunk, player, gameBoard){
        if(!player.readyToFight()){
            console.log('Hold yr horses, chief');        
        }
        else{
             fireShot(chunk, player, gameBoard);
        }
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
        gameBoard.grid[chunk.dataset.x][chunk.dataset.y].recieveAttack();
    }
    init();
})()