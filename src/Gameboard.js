const ship = require( './ship.js');
const boardDoms = require('./boardDoms.js');

const BOARD_SIZE = 10;

const Gameboard = function(){
    let gameBoard = boardDoms();
    let grid = [];
    let chunk = function(_domElement){
        let domElement = _domElement;
        let occupied = false;
        let attacked = false;
        let ship;
        let section;
        const recieveAttack = function(){
            let hit = false;
            if (occupied){
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
        
        
        return {recieveAttack, setShip};
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
     * @param {x:val, y:val} coords accepts an array of coordinates, form {x:xVal, y:yVal}
     */
    function addShip(coords){
        let newShip = new ship(Object.keys(coords).length);

        let i = 0;
        coords.forEach((coordinate) =>{
            grid[coordinate['x']][coordinate['y']].setShip(newShip, i);
            i++;
        })
    }

    init();


    return {grid, addShip};
}


module.exports = Gameboard;