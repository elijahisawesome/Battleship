const ship = require( './ship.js');

const playerFactory = function(_name, ships){
    const name = _name;
    let RemainingTurns = ships;
    let vertical = false;

    function addShipToBoard(){
        if(RemainingTurns == 4){
            RemainingTurns--;
            return ship(4);
            
        }
        else if(RemainingTurns ==3){
            RemainingTurns--;
            return ship(3);
        }
        else{
            RemainingTurns--;
            return ship(2);
        }
    }

    function readyToFight(){
        if(RemainingTurns == 0){
            return true;
        }
        return false;
    }

    function getName(){
        return name;
    }
    function isVertical(){
        return vertical;
    }
    document.addEventListener('keypress', (e)=>{
        if(e.key == 'v'){
            vertical = !vertical;
        }
    })

    return{getName, readyToFight, addShipToBoard, isVertical}
}


module.exports = playerFactory;