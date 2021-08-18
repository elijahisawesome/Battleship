const ship = require( './ship.js');
const boardDoms = require('./boardDoms.js');
const player = require('./Player.js');

const BOARD_SIZE = 10;

const Gameboard = function(_player){
    let player = _player;
    const name = _player.getName();
    let gameBoard = boardDoms();
    let mainDiv = gameBoard.getGameBoard();
    let grid = [];
    let chunk = function(_domElement){
        let domElement = _domElement;
        let occupied = false;
        let attacked = false;
        let ship;
        let section;
        const recieveAttack = function(){
            attacked = true;
            let hit = false;
            if (occupied){
                ship.registerHit(section);
                hit = true;
            }
            domElement.classList.add('attacked');
            return hit;
        }
        function setShip(_ship, _section){
            ship = _ship;
            section = _section;
            occupied = true;
            domElement.classList.add('ship');
        }

        function checkAttacked(){
            return attacked;
        }
        function checkOccupied(){
            return occupied;
        }
        

        return {recieveAttack, setShip, checkAttacked, checkOccupied};
    }
    function init(){
        for(let i = 0; i<BOARD_SIZE; i++){
            for(let j = 0; j<BOARD_SIZE;j++){
                if(!grid[i]){grid[i] = []}
                newDomPiece = appender(i,j);
                grid[i][j] = chunk(newDomPiece);
            }
        }
    }
    function appender(i,j){
        newDomPiece = gameBoard.getNewChunk(i,j);
        gameBoard.getGameBoard().append(newDomPiece);
        return newDomPiece;
    }
    /**
     * 
     * @param {ship} ship accepts an array of coordinates and a ship
     */
    function addShipI(coords, newShip){
        let i = 0;
        coords.forEach((coordinate) =>{
            grid[coordinate['x']][coordinate['y']].setShip(newShip, i);
            i++;
        })
    }
    function validateShipPlacement(coords){
        let valid = true;
        try{
            coords.forEach((coordinate)=>{
                if(grid[coordinate['x']][coordinate['y']].checkOccupied()){
                    valid = false;
                }
            })
        }
        catch{
            valid = false;
        }
        return valid;
    }
    function validateAttack(coord){
        if (grid[coord['x']][coord['y']].checkAttacked()){
            return false;
        }
        return true;
    }

    init();

    return {grid, addShipI, mainDiv, validateShipPlacement, validateAttack};
}


module.exports = Gameboard;