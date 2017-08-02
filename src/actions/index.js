import 'whatwg-fetch';

import key from '../../key';

//updates text in the searchbox
export function setVideo(term) {
	return {
		type: 'SET_VIDEO',
		payload: term
	};
}

export function setRelatedVideo(term) {
	return {
		type: 'SET_RELATED_VIDEO',
		payload: term
	};
}

//when a video is selected from the list
export function onVideoSelect(video) {
	return function (dispatch) {
		dispatch(requestVideos(video))

		return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&' + key + '&type=video&maxResults=16&relatedToVideoId=' + video.id.videoId)
		.then(response => response.json())
		.then(json =>
			dispatch(receiveRelatedVideos(video, json))
		)
	}
}

//when the search bar changes
//async thunk call
export function fetchVideos(term) {
	return function (dispatch) {
		return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&' + key + '&type=video&maxResults=16&q=' + term)
		.then(response => response.json())
		.then(json =>

			dispatch(receiveVideos(term, json))
		)
	}
}

export function fetchRelatedVideos(term) {
	return function (dispatch) {
		return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&' + key + '&type=video&maxResults=16&q=' + term)
		.then(response => response.json())
		.then(json =>

			dispatch(receiveRelatedVids(term, json))
		)
	}
}

export function requestVideos(video) {
  return {
    type: 'REQUEST_VIDEOS',
    payload: video
  }
}

export function receiveVideos(term, json) {
  return {
    type: 'RECEIVE_VIDEOS',
    term,
    videos: json.items,
  }
}

export function receiveRelatedVids(term, json) {
	return {
    type: 'RECEIVE_RELATED_VIDS',
    term,
    videos: json.items,
  }
}

export function receiveRelatedVideos(term, json) {
  return {
    type: 'RECEIVE_RELATED_VIDEOS',
    term,
    videos: json.items,
  }
}
