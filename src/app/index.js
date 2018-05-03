import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home2 } from "./components/Home2";
import { User } from "./components/User";

class FirstReactAppRouter extends React.Component {
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
		return (
			<Router history={ browserHistory }>
				<Route path={"/"} component={Root}>
					<IndexRoute component={Home2}/>
					<Route path={"user"} component = {User} />
					<Route path={"home2"} component = {Home2} />
				</Route>
				<Route path={"home"} component={Home2} />
			</Router>	
		);
	}
}

render(<FirstReactAppRouter />,window.document.getElementById("mainContainer"));