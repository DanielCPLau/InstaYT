import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import VideoListItem from './video_list_item';
import { onVideoSelect } from '../actions/index';

class VideoList extends Component {
	render() {
		var videoItems = null;
		if (this.props.relatedVideos.length !== 0) {
			videoItems = this.props.relatedVideos.map((video) => {
				return (
					<VideoListItem
						key={video.etag}
						video={video}
						onVideoSelect={this.props.onVideoSelect}
					/>
				)
			});
		} else {
			videoItems = this.props.videos.map((video) => {
				return (
					<VideoListItem
						key={video.etag}
						video={video}
						onVideoSelect={this.props.onVideoSelect}
					/>
				)
			});
		}

		return (
			<ul className="list-group" style={{width: '100%'}}>
				{videoItems}
			</ul>
		)
	}
};

function mapStateToProps(state) {
	return {
		videos: state.video.videos,
		relatedVideos: state.video.relatedVideos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( { onVideoSelect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
