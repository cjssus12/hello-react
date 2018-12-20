import * as types from '../actions/ActionTypes';

const initialstate ={
    color : [255, 255, 255]
};

export default function ui (state=initialstate, action){
    if(action.type === types.SET_COLOR){
        return {
            color:action.color
        };
    } else {
        return state;
    }
}