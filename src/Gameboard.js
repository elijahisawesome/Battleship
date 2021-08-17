const ship = require( './ship.js');
const boardDoms = require('./boardDoms.js');
const player = require('./Player.js');

const BOARD_SIZE = 10;

const Gameboard = function(_player){
    let player = _player;
    const name = _player.getName();
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
        document.body.append(gameBoard.getGameBoard());
    }
    function appender(i,j){
        newDomPiece = gameBoard.getNewChunk(i,j);
        newDomPiece.addEventListener('click', clickedElement);
        gameBoard.getGameBoard().append(newDomPiece);
        return newDomPiece;
    }
    function clickedElement(e){
        e.stopPropagation();
        if(!player.readyToFight()){
            newShip = player.addShipToBoard();
            //spin out to a "constructCords" function
            let coords = [{x:e.target.dataset.x, y:e.target.dataset.y}];
            if(player.isVertical()){
               for(let i = 1; i<newShip.getLength(); i++){
                    coords.push({y:e.target.dataset.y, x:parseInt(e.target.dataset.x)+i})
               } 
            }
            else{
                for(let i = 1; i<newShip.getLength(); i++){
                    coords.push({x:e.target.dataset.x, y:parseInt(e.target.dataset.y)+i})
               } 
            }
            addShipI(coords, newShip);
        }
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

    init();

    return {grid, addShipI};
}


module.exports = Gameboard;