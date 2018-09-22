import React from 'react';
import './styles/container.css';
import InnerContainer from './innerContainer.jsx';
import SubmitButton from './submitButton.jsx';


const Container = (props) => (
	<div>
		<div className="container">
			<InnerContainer user={"User"} videos={"Videos"}/>
		</div>
		<SubmitButton />
	</div>
);

export default Container;