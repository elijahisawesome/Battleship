const gameBoardDoms = function(name){
    const mainDiv = document.createElement('div');

    function init(){        
        mainDiv.classList.add('gameBoard');
        if(name == 'player1'){
            mainDiv.classList.add('p1');
        }
        else if (name == 'player2'){
            mainDiv.classList.add('p2');
        }
    }

    function getNewChunk(x, y){
        let chunk = document.createElement('div');
        chunk.dataset.x = x;
        chunk.dataset.y = y;
        chunk.classList.add('chunk');
        return chunk;
    }
    function getGameBoard(){
        return mainDiv;
    }

    init();
    return {getGameBoard, getNewChunk};
}

module.exports = gameBoardDoms;