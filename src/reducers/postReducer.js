import {FETCH_POSTS,NEW_POSTS} from '../actions/types'
const initialState={
    items:[],
    item:{}
}
export default function(state=initialState,action){
    console.log(action)
    switch(action.type){
        case FETCH_POSTS: 
        return {...state,items:action.payload}
        case NEW_POSTS:
        default:
        return state;
    }
};
// const postReducer=[];
// export default postReducer;