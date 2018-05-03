import React from "react";

export const  HeaderSL = (props) => {
	return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><a href="#">{ props.linkText }</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
}
