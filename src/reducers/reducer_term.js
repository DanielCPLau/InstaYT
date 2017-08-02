const initialState = {
	term: '',
	relatedTerm: ''
}

export default function(state = initialState, action) {

	switch(action.type) {

		case 'SET_VIDEO':
			return {
				...state,
				term: action.payload
			};

		case 'SET_RELATED_VIDEO':
		return {
			...state,
			relatedTerm: action.payload
		};
	}
	return state;
}
