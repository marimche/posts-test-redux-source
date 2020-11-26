import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions';
import Post from './Post';

export default ({posts}) => {
	const dispatch = useDispatch();
	// const posts = useSelector(state => state.posts.fetchedPosts); //для получения из store, добавить позже
	console.log(posts);
	if (!posts.length){
		return <button className="btn btn-primary" >Загрузить</button>
		// return <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())} >Загрузить</button>
	}
	return posts.map(post => <Post post={post} key={post.id}/>)
}
