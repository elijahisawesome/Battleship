const gameBoardDoms = function(){
    const mainDiv = document.createElement('div');

    function init(){        
        mainDiv.classList.add('gameBoard');
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