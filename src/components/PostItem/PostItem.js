import React from 'react';
import classes from './PostItem.module.css';

const PostItem = ({title, createAt, id}) => (
		<div className={classes.postItem}>
			<a href={'/post/${_id}'}>
				<h2>{title}</h2>
			</a>
			<p>
				<i>Дата публикации: {createAt}</i>
				<a href='#'>Удалить</a>
				<a href='#'>Редактировать</a>
			</p>
      </div>
	);

export default PostItem;