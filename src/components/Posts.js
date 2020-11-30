import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';

const Posts = ({ syncPosts }) => {
	if (!syncPosts.length){
		return <p className="text-center">Постов пока нет</p>
	}
	return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

//подписка на обновления хранилища
const mapStateToProps = state => {
	return {
		syncPosts: state.posts.posts
	};
}

//компонент-контейнер 
export default connect(mapStateToProps)(Posts);