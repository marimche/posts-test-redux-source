import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/actions';
import Post from './Post';
import {Loader} from './Loader';
import classes from './FetchedPosts.module.css'

export default () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts.fetchedPosts); //получение из сторе
	const loading = useSelector(state => state.app.loading);

	if(loading){
		return <Loader />
	}


	if (!posts.length){
		// return <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())} >Загрузить</button>
		return <button className={classes.button1} onClick={() => dispatch(fetchPosts())} >Загрузить</button>
	}
	return posts.map(post => <Post post={post} key={post.id}/>)
}
