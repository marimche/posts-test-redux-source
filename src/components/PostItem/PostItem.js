import React from 'react';
import {Link} from 'react-router-dom';
import classes from './PostItem.module.css';

const PostItem = ({title, createAt, id}) => (
		<div className={classes.postItem}>
			<Link to={'/post/${_id}'}>
				<h2>{title}</h2>
			</Link>
			<p>
				<i>Дата публикации: {createAt}</i>
				<Link to='#'>Удалить</Link>
				<Link to='#'>Редактировать</Link>
			</p>
      </div>
	);

export default PostItem;