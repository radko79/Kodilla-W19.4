/*Stwórz plik actions.js, w którym zdefiniujesz typy akcji oraz kreatory akcji dla następujących zdarzeń:
•	tworzenie komentarza,
•	edycja komentarza,
•	usuwanie komentarza,
•	ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza
*/

import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMBS_UP = 'THUMBS_UP';
const THUMBS_DOWN = 'THUMBS_DOWN';

// (1)
const addComment = text => {
	return {
		type: ADD_COMMENT,
		id: uuid.v4(),
		text
	}
}

const boundAddComment = text => dispatch(addComment(text));
boundAddComment('New comment');
boundAddComment('Another comment');


// (2)
const editComment = text(id, text) => {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
}

const boundEditComment = text(id, text) => dispatch(editComment(id, text));
boundEditComment('New comment with amendment');
boundEditComment('Another comment with extra words');

// (3)
const editComment = id => {
	return {
		type: DELETE_COMMENT,
		id 				
	}
}

const boundDeleteComment = id => dispatch(deleteComment(id));
boundDeleteComment(id);					// jak ustalić id nadane poprzez uuid.v4?

// (4)
const thumbsUp = id => {
	return {
		type: THUMBS_UP,
		id,
		action: ++like
	}
}
const boundThumbsUp = id => dispatch(thumbsUp(id));
boundThumbsUp(id);

const thumbsDown = id => {
	return {
		type: THUMBS_DOWN,
		id,
		action: --like
	}
}
const boundThumbsDown = id => dispatch(thumbsDown(id));
boundThumbsDown(id);