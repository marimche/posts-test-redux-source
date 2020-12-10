import React from 'react'
import classes from './Header.module.css'

export default ({title, description, imageUrl}) => {
	return (
		<div className={classes.headerBlock}>
			<div className="container">
				<div className="header-block__overlay"></div>
				<div className="header-block__center">
					<h1>{title}</h1>
					<h3>{description}</h3>
				</div>
			</div>
		</div>
	)
}
