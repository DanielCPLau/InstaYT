const initialState = {
	term: ''
}

export default function(state = initialState, action) {

	switch(action.type) {

		case 'SET_VIDEO':
			console.log("SET VIDEO CALLED" + action.payload)

			return {
				...state,
				term: action.payload
			};
	}
	return state;
}