import { FETCH_POSTS, NEW_POSTS } from "../actions/types";
export const fetchPosts=()=>dispatch=>{
    console.log('https://jsonplaceholder.typicode.com/posts')
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts =>{
    console.log('posts',posts)
  }
    // dispatch({
    //   type: FETCH_POSTS,
    //   payload: posts
    // })
  );

}
