import React, { Component } from 'react';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import RelatedSearchBar from './related_search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

class App extends Component {
	render () {
		return (
			<div style={roomType}>
				<SearchBar/>
				<VideoDetail />
				<div style={relatedStyle}>  <br/> Related Videos</div>
				<RelatedSearchBar />
				<VideoList/>
			</div>
		)
	}
}

var roomType = {
	margin: '8px -10px 0 -10px',
	backgroundColor: 'white',
	overflowX: 'hidden'
}

var relatedStyle = {
	marginTop: '-25px',
	fontSize: '30px',
	textAlign: 'left'
}

export default App;
