import './style.css';
import Header from './Modules/Header.js';
const gameBoard = require('./Modules/Gameboard.js');
const player = require( './Modules/Player.js');


const main = (function(){
    const overDiv = document.createElement('div');
    let header = Header();

    document.body.append(overDiv);
    let player1;
    let gameBoard1;
    let playerBoard1;

    let player2;
    let gameBoard2;
    let playerBoard2;

    let gameStarted;

    function init(){
        player1 = player('player1', 4);
        gameBoard1 = gameBoard(player1);
        playerBoard1 = gameBoard1.mainDiv;

        player2 = player('player2', 4);
        gameBoard2 = gameBoard(player2);
        playerBoard2 = gameBoard2.mainDiv;

        gameStarted = false;

        header.setupScreen();

        overDiv.classList.add('fullBoard');
        playerBoard1.addEventListener('click', (event)=>{
            divListenHandlerSetup(event, event.target, player1, gameBoard1);
            mainLoop();
        })
        
        
        overDiv.append(playerBoard1);
    }


    function mainLoop(){
        if(player1.readyToFight()&&!gameStarted){
            cpuPopulator();
            header.fightScreen();
            gameStarted = true;
        }
        else if(player1.readyToFight()){
            console.log("wait shit");
            cpuPlay();
            checkIfWinner();
        }

    }
    function cpuPlay(){
        function randomCoord(){
            let coordinate = {'x':Math.round(Math.random()*9),'y':Math.round(Math.random()*9)}
            return coordinate;
        }
        function formatCoord(){
            let coordinate = {dataset:{x:coord.x,y:coord.y}};
            return coordinate;
        }

        let coord = randomCoord();

        while(!gameBoard1.validateAttack(coord)){
            coord = randomCoord();
        }
        
       fireShot(formatCoord(), null, gameBoard1);   
    }
    function cpuPopulator(){
        playerBoard2.addEventListener('click', event=>{
                divListenHandlerPlay(event,event.target, player1, gameBoard2);
                })
        Array.from(playerBoard2.children).forEach(child =>{child.classList.add('cpu')})
        
                
        function placeShips(){    

            while(!player2.readyToFight()){
                let newShip = player2.addShipToBoard();

                let randomVertical = flipVert();
                if(randomVertical){
                    player2.toggleVertical();
                }

                let coordinate = randomCoord();
                let coords = [];
                coords.push(coordinate);

                if(player2.isVertical()){
                    for(let i = 1; i<newShip.getLength(); i++){
                         coords.push({y:coordinate.y, x:parseInt(coordinate.x)+i})
                    }
                 }
                 else{
                     for(let i = 1; i<newShip.getLength(); i++){
                         coords.push({x:coordinate.x, y:parseInt(coordinate.y)+i})
                    }
                 }
                
                if(gameBoard2.validateShipPlacement(coords)){
                    gameBoard2.addShip(coords, newShip);
                }
                else{
                    player2.invalidMove();
                }
            }

            


            function flipVert(){
                let flip = true;
                if(Math.round(Math.random())*10 > Math.round(Math.random())*10){
                    flip = false;
                }
                return flip;
            }
            function randomCoord(){
                let coordinate = {'x':Math.round(Math.random()*9),'y':Math.round(Math.random()*9)}
                return coordinate;
            }

        }
        placeShips();
        overDiv.append(playerBoard2);
    }

    function divListenHandlerPlay(e, chunk, player, gameBoard){
        try{
            if(gameBoard.validateAttack({x:chunk.dataset.x, y:chunk.dataset.y})){
                fireShot(chunk, player, gameBoard);
                checkIfWinner();
                mainLoop();
            }
        }
        catch{
            return;
        }
    }

    function divListenHandlerSetup(e,chunk, player, gameBoard){
        if(!!chunk.dataset.x){
            if(!player.readyToFight()){
                setupPhase(chunk, player, gameBoard);
            }
            else if(player.readyToFight()){
                console.log('Attack the enemy!');
            }
        }
        e.stopPropagation();
    }
    

    function checkIfWinner(){
        if(player1.hasLost()){
            alert('player 2 wins');
            reset();
            init();
        }
        else if(player2.hasLost()){
            alert('player 1 wins');
            reset();
            init();
        }
    }
    function reset(){
        Array.from(overDiv.children).forEach(child=>{
            child.remove();
        })
    }
    
    function setupPhase(chunk, player, gameBoard){
        let newShip = player.addShipToBoard();
        //possibly spin this into ship, allow ship to know where it is.
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
        if(gameBoard.validateShipPlacement(coords)){
            gameBoard.addShip(coords, newShip);
        }
        else{
            player.invalidMove();
        }
       
    }

    function fireShot(chunk, player, gameBoard){
        gameBoard.grid[chunk.dataset.x][chunk.dataset.y].recieveAttack();
    }
    init();
})()