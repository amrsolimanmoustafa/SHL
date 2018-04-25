import {GETSERVESIES} from '../actions/types'
const initialState={
    services:[]
}
export default function(state=initialState,action){
    switch(action.type){
        case GETSERVESIES:
        return {...state,
            services:action.payload}
        default:
        return state;
    }
};
