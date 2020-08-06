import { createStore } from 'redux';

let initialState = {
	drawer : false,
	data : [],
	pagination : {
		rowsPerPage : 10,
		page : 0
	},
	cardsScroll : null
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case 'TOG_DRAWER' : return {...state, drawer:action.x};
		case 'SET_DATA' : return { ...state, data : action.x };
		case 'SET_ROWS_PER_PAGE' : return { ...state, pagination:{rowsPerPage:action.x, page:state.pagination.page}};
		case 'SET_PAGE' : return { ...state, pagination:{rowsPerPage:state.pagination.rowsPerPage, page:action.x}};
		case 'SET_CARDS_SCROLL' : return { ...state, cardsScroll:action.x };
		default : return state;
	}
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
