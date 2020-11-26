import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';

//функция формирования нового state
//принимает набор редьюсеров приложения
export const rootReducer = combineReducers( {
	//импортируем состояние возвращаемое postsReducer по ключу: posts
	posts: postsReducer
})