const ship = require( './ship.js');

const Gameboard = function(){
    let grid = [];
    let chunk = function(){
        let occupied = false;
        let attacked = false;
        let ship;
        let section;
        const recieveAttack = function(){
            if (occupied){
                return true;
            }
            return false;
        }
        function setShip(_ship, _section){
            ship = _ship;
            section = _section;
            occupied = true;
        }
        
        return {recieveAttack, setShip};
    }
    function init(){
        for(let i = 0; i<10; i++){
            for(let j = 0; j<10;j++){
                if(!grid[i]){grid[i] = []}
                grid[i][j] = chunk();
            }
        }
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