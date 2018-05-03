import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Home2 } from "./components/Home2";

class FirstReactApp extends React.Component {
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
							<h1><Home name="John smith" age="33" user={userInfo}>
								<p>Home component rendered successfully</p>
							</Home></h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<h1><Home2 name="John smith Home-2" age={33} /></h1>
						</div>
					</div>
				</div>
		);
	}
}

render(<FirstReactApp />,window.document.getElementById("mainContainer"));