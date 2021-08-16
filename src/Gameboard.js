const Gameboard = function(){
    let grid = [];
    let chunk = function(){
        let occupied = false;
        const recieveAttack = function(){
            return true;
        }
        return {recieveAttack};
    }
    function init(){
        for(let i = 0; i<10; i++){
            for(let j = 0; j<10;j++){
                if(!grid[i]){grid[i] = []}
                grid[i][j] = chunk();
            }
        }
    }

    init();


    return grid;
}


module.exports = Gameboard;