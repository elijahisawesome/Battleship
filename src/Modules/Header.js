const header = function(){
    const header = document.createElement('div');
    header.classList.add('title');


    const setupScreen = function(){
        header.innerText = "SETUP PHASE, PRESS V TO ROTATE PLACEMENT";
    }

    const fightScreen = function(){
        header.innerText = "FIGHT!";
    }

    document.body.prepend(header);
    return {setupScreen, fightScreen}
    
}

export default header 