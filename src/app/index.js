import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Home2 } from "./components/Home2";
import { HeaderSL } from "./components/HeaderSL";


class FirstReactApp extends React.Component {
	constructor(){
		super();
		this.state = {
			userName : "Tyrion Lannister"
		}
	}
	onHelloClick(){
			alert('hi welcome to index.js from home .js');
	}
	onChangeFname(newName){
		this.setState({
			userName : newName
		})

	}
	render(){
		var userInfo = {
			firstname : "john",
			lastname : "smith",
			hobbies : ["Skating","Hiking","Biking"],
			email : "john@smith.com"
		};
		
		return (
				<div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<h1><Header /></h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<h1><Home name={this.state.userName} age="33" user={userInfo}>
								<p>Home component rendered successfully</p>
							</Home></h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<h1><Home2 
										name={this.state.userName} 
										age={33} 
										sayHello={this.onHelloClick} 
										changeName = {this.onChangeFname.bind(this)}
										/></h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<h1><HeaderSL linkText="Here is just a state-less components" /></h1>
						</div>
					</div>
				</div>
		);
	}
}

render(<FirstReactApp />,window.document.getElementById("mainContainer"));