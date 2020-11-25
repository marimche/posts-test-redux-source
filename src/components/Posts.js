import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';

const Posts = ({ syncPosts }) => {
	if (!syncPosts.length){
		return <p className="text-center">Постов пока нет</p>
	}
	return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
	console.log(state);
	return {
		syncPosts: state.posts.posts
	};
}

//это компонент-контейнер 
//сonnect() возвращает ф-цию, ее вызываем, передаем наш компонент
export default connect(mapStateToProps)(Posts);