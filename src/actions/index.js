export function setVideo(term) {
	console.log("setVideo called");
	return {
		type: 'SET_VIDEO',
		payload: term
	};
}

export function onSearchTermChange(term) {
	console.log("onSearchTermChange called");
	return {
		type: 'TERM_CHANGE',
		payload: term
	}
}

export function onVideoSelect(video) {
	console.log("onVideoSelect called");
	return {
		type: 'SELECT_VIDEO',
		payload: video
	}
}