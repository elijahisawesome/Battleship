/**
 * @param {_length}        length         length of ship, zero indexed.
 */
const shipFactory = function(_length){
    const length = _length;
    let sections = [];
    for(let x = 0; x<length; x++){
        sections[x]= {hit:false};
    }

    function getLength(){
        return length;
    }
    function getSections(){
        return sections;
    }
    function registerHit(section){
        sections[section].hit = true;
    }
    function getSection(section){
        return(sections[section].hit);
    }
    function isSunk(){
        let sunk = true;
        sections.forEach(section =>{
            if(section.hit == false){
                sunk = false;
            }
        })
        return sunk;
    }
    return {getLength, getSections, getSection, registerHit, isSunk}
}


module.exports = shipFactory;

