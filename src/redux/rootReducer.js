import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';

//функция, которая отвечает за формир-ие нового state
//принимает набор редьюсеров приложения
export const rootReducer = combineReducers( {
	//импортируем состояние возвращаемое postsReducer по ключу: posts
	posts: postsReducer
})