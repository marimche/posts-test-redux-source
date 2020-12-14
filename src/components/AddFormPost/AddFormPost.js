import React from 'react';
import classes from './AddFormPost.module.css';

const AddFormPost = () => {
	return(
		<form className="add-form">
		<div className="add-form__row">
		  <h5>
			 <label for="title" class="form-label">Заголовок</label>
		  </h5>
		  <input type="text" className="form-control" id="title" aria-describedby="title"/>
		</div>
		<div >
		  <h5>
			 <label for="image" class="form-label">URL Картинки</label>
		  </h5>
		  <input type="text" className="form-control" id="image" aria-describedby="image"/>
		</div>
		<div >
		  <h5>
			 <label for="description" class="form-label">Описание</label>
		  </h5>
		  <textarea rows="8" className="form-control" id="description" aria-describedby="description"/>
		</div>
		<button type="submit" className="btn btn-primary">Submit</button>
	 </form>
	)
}

export default AddFormPost;
