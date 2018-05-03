import React from "react";
import PropTypes from 'prop-types'

export class Home extends React.Component {
	render(){
		console.log("here are the props "+this.props);
		return (
				<div>
					<p> Home component renders ! </p>
					<p> Your name is {this.props.name}</p>
					<div>
					<h4>Hobbies </h4>
					<ul>
						{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
					</ul>
					{this.props.children}
					</div>
				</div>
		);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	age : PropTypes.number,
	user : PropTypes.object,
	children: PropTypes.element.isRequired
}