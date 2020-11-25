import React from 'react';
import {connect} from 'react-redux';
import {createPost} from '../redux/actions';

class PostForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};
	}

	SubmitHandler = event => {
		event.preventDefault();
		const {title} = this.state; //дестр-ция объекта 
		if (!title.trim()) { //пост с пустым заголовком не добавляем 
			return 
		}
		const newPost = {
			title, id: Date.now().toString()
		}
		console.log(newPost);
		this.props.createPost(newPost);  //вызываем диспатч -> меняем стейт
		this.setState({title: ''});
	}

	changeInputHandler = event => {
		event.persist(); //?
		//в setState передаем функцию, которая обновит value для input 
		//то есть надо сразу выполнить ф-цию и вернуть объект, поэтому +()
		//объединяем обновленный state с предыдущим (приоритет у нового); (spread)
		this.setState( prev => ({...prev, ...{
			[event.target.name]: event.target.value
		}})); 
	}

	render() {
		return (
			<form onSubmit={this.SubmitHandler}>
				<div className="form-group">
					<label htmlFor="title">Заголовок поста</label>
					<input 
						type="text" 
						className="form-control" 
						id="title" value={this.state.title} 
						name="title"
						onChange={this.changeInputHandler}
					/>
				</div>
				<button className="btn btn-success" type="submit">Создать</button>
			</form>
		)	
	}
}

//actions
const mapDispatchToProps = {
	createPost: createPost
}

// export default connect(null, {createPost})(PostForm)
export default connect(null, mapDispatchToProps)(PostForm)