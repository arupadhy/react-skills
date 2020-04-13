import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    isError: false,
    posts:[]
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'data_retrieved':
          return { ...state, posts: action.data, isLoading: false }
        case 'error':
          return { ...state, isError: true, isLoading: false }
        default:
          return state;  
    }
}

export default function ReducerComponentPartTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

       async function fetchData() {
           try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log('===================================================');
            console.log(resp);
            dispatch({
                type: 'data_retrieved',
                data: resp.data
            });
        }catch(err) {
            dispatch({
                type: 'error'
            });
        }
    }

    fetchData();
        
    }, []);

    console.log(state);
    return (
        <div>
          {state.isLoading ? <p>Loading....</p> : null}
          {state.isError ? <p> Error </p> : null}

          {state.posts.map(post => <p>{post.title} </p>)}
        </div>
    );
}