import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import VideoListItem from './video_list_item';
import { onVideoSelect } from '../actions/index';

class VideoList extends Component {

	render() {
		const videoItems = this.props.videos.map((video) => {
		return (
			<VideoListItem 
				key={video.etag} 
				video={video} 
				onVideoSelect={this.props.onVideoSelect} />
		)
		});

		return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		)
	}
};

function mapStateToProps(state) {
	return {
		videos: state.video.videos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( { onVideoSelect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);