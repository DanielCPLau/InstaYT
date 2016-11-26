import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import VideoListItem from './video_list_item';
import { onVideoSelect } from '../actions/index';

class VideoList extends Component {
	render() {
		if (this.props.room == "light") {
			roomType = light;
		}
		else {
			roomType = dark;
		}
		const videoItems = this.props.videos.map((video) => {
		return (
			<VideoListItem 
				key={video.etag} 
				video={video} 
				onVideoSelect={this.props.onVideoSelect} 
				roomStyle={roomType}/>
		)
		});

		return (
			<ul className="list-group">
				{videoItems}
			</ul>
		)
	}
};

var roomType;

var dark = {
	backgroundColor: 'black'
}

var light = {
	backgroundColor: 'white'
}

function mapStateToProps(state) {
	return {
		videos: state.video.videos,
		room: state.room.roomType
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( { onVideoSelect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);