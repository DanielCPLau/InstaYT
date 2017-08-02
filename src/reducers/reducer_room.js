const initialState = {
	roomType: 'light'
}

export default function(state = initialState, action) {

	switch(action.type) {

		case 'TOGGLE_ROOM':
			return {
				...state,
				roomType: action.payload
			};
	}

	return state;
}
