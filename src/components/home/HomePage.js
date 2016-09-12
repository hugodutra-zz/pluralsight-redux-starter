import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotrom">
				<h1>Pluralsight Administration</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sequi iure iusto, provident fugit voluptatibus!</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		)
	}
}

export default HomePage;