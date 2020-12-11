import React from 'react'
import classes from './Header.module.css'

	export default ({title, description, imageUrl}) => {
	return (
		// <div className={classes.headerBlock} style={{ backgroundImage: 'url(${imageUrl})'}}>
		<div className={classes.headerBlock}>
			<div className="container">
				<div className={classes.headerBlock__overlay}></div>
				<div className={classes.headerBlock__center}>
					<h1>{title}</h1>
					<h3>{description}</h3>
				</div>
			</div>
		</div>
	)
}
