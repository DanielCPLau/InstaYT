import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {

	render() {

		if (!this.props.video) {
			return <div> Loading... </div>;
		}

		const videoId = this.props.video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

		return (
			<div className="video-detail">
				<div className="embed-responsive embed-responsive-4by3">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details">
					<div className='videoTitle'>{this.props.video.snippet.title}</div>

					<div>{this.props.video.snippet.description}</div>
				</div>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		video: state.video.selectedVideo
	}
}

export default connect(mapStateToProps)(VideoDetail);