import YTSearch from 'youtube-api-search';

const initialState = {
	selectedVideo: null,
	videos: []
}

export default function(state = initialState, action) {
	switch(action.type) {
	//calls to youtube API to search video

		case 'REQUEST_VIDEOS':
			return {...state, 
				selectedVideo: action.payload }

		case 'RECEIVE_VIDEOS':
			var fullVid = action.videos;
			var firstVid = fullVid[0];
			fullVid.shift();
			return {...state,
				videos: fullVid,
				selectedVideo: firstVid
			}

		case 'RECEIVE_RELATED_VIDEOS':
			var listofRelate = action.videos;
			listofRelate.shift();
			return {...state,
				videos: listofRelate}

		default:
			return state;
	}
	return state;
}