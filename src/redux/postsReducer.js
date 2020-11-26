import FetchedPosts from '../components/FetchedPosts';
import {CREATE_POST, FETCH_POST} from './types';


const initialState = {
	posts: [],
	FetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
	switch (action.type){
		case CREATE_POST: 
			return {...state, posts: state.posts.concat([action.payload])}
		case FETCH_POST:
			return {...state, FetchedPosts: action.payload}
		default: return state
	}
}