import {FETCH_POSTS,LOGIN} from '../actions/types'
const initialState={
    user:{}
}
export default function(state=initialState,action){
    console.log('action :L:',action.payload)
    switch(action.type){
        case LOGIN:
        return {...state,
          user:action.payload}
        default:
        return state;
    }
};
