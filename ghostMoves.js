import {DIRECTIONS, OBJECT_TYPE } from './setup.js'

//Primitive random movement
export function randomMovement(position, direction, objectExist){
    let dir = direction;
    let nextMovePos = position + dir.movement;

    //create an array from the directions object keys
    const keys = Object.keys(DIRECTIONS);

    while(
        objectExist(nextMovePos, OBJECT_TYPE.WALL) || 
        objectExist(nextMovePos, OBJECT_TYPE.GHOST)
    ){
        //get random key from th key array
        const key = keys[Math.floor(Math.random() * keys.length)];
        // set the next move
        dir = DIRECTIONS[key];

        //set the position
        nextMovePos = position + dir.movement;
    }
    return {nextMovePos, direction: dir};

}