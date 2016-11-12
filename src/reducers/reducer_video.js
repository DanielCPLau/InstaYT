import YTSearch from 'youtube-api-search';

const initialState = {
	selectedVideo: null,
	videos: []
}

export default function(state = initialState, action) {
	switch(action.type) {
	//calls to youtube API to search video
		case 'TERM_CHANGE':
			console.log("TERM_CHANGE called" + action.payload);
			const API_KEY = 'AIzaSyBOryAXJUTN31wmfvIWTQyt1UbN3-e-TdA';

			var APIvideos = 0;
			var APIselectedVideo = 0;

			var loading = true;

			function getVideos() {

				YTSearch({key: API_KEY, term: action.payload}, videos => {
					console.log(videos)
					this.APIvideos = videos;
				})

				console.log("DONE")
			}

			getVideos();
			console.log(APIvideos)

			return {
				...state,
				selectedVideo: APIselectedVideo,
				videos: APIvideos
			};

		default:
			return state;
	}
	return state;
}