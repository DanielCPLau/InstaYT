import YTSearch from 'youtube-api-search';

const initialState = {
	selectedVideo: null,
	videos: [],
	relatedVideos: []
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
				selectedVideo: firstVid,
				relatedVideos: []
			}

		case 'RECEIVE_RELATED_VIDEOS':
			var listofRelate = action.videos;
			listofRelate.shift();
			return {...state,
				videos: listofRelate,
				relatedVideos: []}

		case 'RECEIVE_RELATED_VIDS':
			var fullVid = action.videos;
			return {...state,
				relatedVideos: fullVid
			}

		default:
			return state;
	}
	return state;
}
