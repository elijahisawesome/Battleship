const ship = require( './ship.js');

const playerFactory = function(_name, amtOfShips){
    const name = _name;
    let RemainingTurns = amtOfShips;
    let ships = [];
    let vertical = false;

    function addShipToBoard(){
        if(RemainingTurns == 4){
            RemainingTurns--;
            let newShip = ship(4);
            ships.push(newShip);
            return newShip;
            
        }
        else if(RemainingTurns ==3){
            RemainingTurns--;
            let newShip = ship(3);
            ships.push(newShip);
            return newShip;
        }
        else{
            RemainingTurns--;
            let newShip = ship(2);
            ships.push(newShip);
            return newShip;
        }
    }

    function readyToFight(){
        if(RemainingTurns == 0){
            return true;
        }
        return false;
    }

    function invalidMove(){
        RemainingTurns ++;
        ships.pop();
    }

    function getName(){
        return name;
    }
    function isVertical(){
        return vertical;
    }
    function hasLost(){
        let lost = true;
        ships.forEach(ship=>{
            if(!ship.isSunk()){
                lost = false;
            }
        })
        return lost;
    }
    document.addEventListener('keypress', (e)=>{
        if(e.key == 'v'){
            toggleVertical();
        }
    })
    function toggleVertical(){
        vertical = !vertical;
    }

    return{getName, readyToFight, addShipToBoard, isVertical, hasLost, invalidMove, toggleVertical}
}


module.exports = playerFactory;