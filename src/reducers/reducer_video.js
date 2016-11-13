import YTSearch from 'youtube-api-search';

const initialState = {
	isFetching: false,
	selectedVideo: null,
	videos: []
}

export default function(state = initialState, action) {
	switch(action.type) {
	//calls to youtube API to search video

		case 'REQUEST_VIDEOS':
			return {...state, 
				isFetching: true }

		case 'RECEIVE_VIDEOS':
			var fullVid = action.videos;
			var firstVid = fullVid[0];
			fullVid.shift();
			return {...state,
				videos: fullVid,
				selectedVideo: firstVid
			}

		case 'SELECT_VIDEO':
			return {...state,
				selectedVideo: action.payload}
		default:
			return state;
	}
	return state;
}