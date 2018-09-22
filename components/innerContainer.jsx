import React from 'react';
import './styles/innerContainer.css';

//TODO: create a seperate component. remove duplicate code blocks.
const InnerContainer = (props) => (
	<div className="innerContainer">

		<div className="wrapper">
			<div className="title"><strong>{props.user}</strong></div>
			<div className="checkbox-btn">
				<input type="checkbox" name="" />
				<div><span className="slide"></span></div>
			</div>
		</div>


		<div className="wrapper">
			<div className="title"><strong>{props.videos}</strong></div>
			<div className="checkbox-btn">
				<input type="checkbox" name="" />
				<div><span className="slide"></span></div>
			</div>
		</div>
	</div>
);

export default InnerContainer;