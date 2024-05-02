import React from "react";
import PropTypes from "prop-types";

const YoutubeFrame = ({ embedId }) => (
	<div className="video-responsive">
		<iframe
			width="853"
			height="480"
			style={{ borderRadius: "15px" }}
			src={`https://www.youtube.com/embed/${embedId}?controls=1&modestbranding=1&showinfo=0`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="ambulance"
		/>
	</div>
);

YoutubeFrame.propTypes = {
	embedId: PropTypes.string.isRequired
};

export default YoutubeFrame;