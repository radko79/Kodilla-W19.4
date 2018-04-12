import {ADD_COMMENT} from './actions.js'
import {EDIT_COMMENT} from './actions.js'
import {DELETE_COMMENT} from './actions.js'
import {THUMBS_UP} from './actions.js'
import {THUMBS_DOWN} from './actions.js'

// const initialState = {
// 	comments: [],
// 	users: []
// }

function reducer (state = [], action) {
	switch (action_type) {
		case ADD_COMMENT: 
			return Object.assign({}, state, {
				comments: [
				...state,
				{
					id: action.id,
					text: action.text,
					votes: 0
				}]
			})

		case DELETE_COMMENT: 
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});

		case EDIT_COMMENT:
			const rightComment = state.comments.find(comment => comment.id === action.id); // znajdź komentarz od id = temu z akcji
			if(rightComment) {
				const index = state.comments.indexOf(rightComment);						// znajdź początkową pozycję w tablicy
				return [
					...state.comments.slice(0, index),									// zwróć tablicę od początku do komentarza
					{
						...state.comments[index],										// w miejscu z początkiem starego komentarza
						text: action.text												// wstaw tekst
					},
					...state.comments.slice(index+1, state.comments.length),			// dołącz pozostałą część tablicy
			]} else {
				return state;
			};
			
		case THUMBS_UP:
			const rightComment = state.comments.find(comment => comment.id === action.id);
			if(rightComment) {
				const index = state.comments.indexOf(rightComment);
				return [
					...state.comments.slice(0, index),
					{
						...state.comments[index],										// lokalizacja komentarza o comment.id = action.id
						{votes: votes + 1},												// votes +1
					},
					...state.comments.slice(index+1, state.comments.length),
				]
			} else {
				return state;
			}

		case THUMBS_DOWN:
			const rightComment = state.comments.find(comment => comment.id === action.id);
			if(rightComment) {
				const index = state.comments.indexOf(rightComment);
				return [
					...state.comments.slice(0, index),
					{
						...state.comments[index],										// lokalizacja komentarza o comment.id = action.id
						{votes: votes - 1},												// votes -1
					},
					...state.comments.slice(index+1, state.comments.length),
				]
			} else {
				return state;
			}

		default:
			return state;
	}
}

