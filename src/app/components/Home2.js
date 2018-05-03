import React from "react";
import PropTypes from 'prop-types'
export class Home2 extends React.Component {
	constructor(props){
		super();
		this.state={
			age : props.age,
			status : 0
		}
	}
	btnOlder(){
		this.setState ( {
			age : this.state.age + 5
		});	
	}
	render(){
		return (
				<div>
					<p> Home component renders ! </p>
					<p> Your name is {this.props.name}</p>
					<p> Your Age is {this.state.age}</p>
					<button onClick={() => this.btnOlder()} className="btn btn-primary">Old-Age! </button>
				</div>
		);
	}
}

Home2.propTypes = {
	name: PropTypes.string,
	age : PropTypes.number
}
