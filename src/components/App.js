import React, { Component } from 'react';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

class App extends Component {
	render () {
		if (this.props.room == "light") {
			roomType = light;
		}
		else {
			roomType = dark;
		}
		return (
			<div style={roomType}>
				<SearchBar/>
				<VideoDetail />
				<div style={relatedStyle}>  <br/> Related Videos</div>
				<VideoList/>
			</div>
		)
	}
}

var roomType;

var dark = {
	paddingTop: '8px',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)',
	background: 'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) )'
}

var light = {
	paddingTop: '8px',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)',
	backgroundColor: 'white'
}

var relatedStyle = {
	marginLeft: '20px',
	fontSize: '30px'
}

function mapStateToProps(state) {
	return {
		room: state.room.roomType
	}
}

export default connect(mapStateToProps)(App);