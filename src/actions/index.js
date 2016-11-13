import 'whatwg-fetch';

var key = 'key=AIzaSyBOryAXJUTN31wmfvIWTQyt1UbN3-e-TdA';

export function setVideo(term) {
	console.log("setVideo called");
	return {
		type: 'SET_VIDEO',
		payload: term
	};
}

export function onVideoSelect(video) {
	console.log("onVideoSelect called");
	return {
		type: 'SELECT_VIDEO',
		payload: video
	}
}

//async thunk call
export function fetchVideos(term) {
	console.log("FETCHING VIDS");
	return function (dispatch) {
		dispatch(requestVideos(term))

		return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&' + key + '&type=video&maxResults=16&q=' + term)
		.then(response => response.json())
		.then(json =>

			dispatch(receiveVideos(term, json))
		)
	}
}

export function requestVideos(term) {
  return {
    type: 'REQUEST_VIDEOS',
    term
  }
}

export function receiveVideos(term, json) {
  return {
    type: 'RECEIVE_VIDEOS',
    term,
    videos: json.items,
  }
}




