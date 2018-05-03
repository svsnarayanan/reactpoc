import React from "react";
import PropTypes from 'prop-types'
export class Home2 extends React.Component {
	constructor(props){
		console.log("props value" + props);
		super();
		this.state={
			age : props.age,
			status : 0,
			userName : props.name

		}
	}

	/* Life cycle method 1 */
	componentWillMount(){
		console.log("Life cycle method 1 :: component will mount");
	}
	/* Life cycle method 2 */
	componentDidMount(){
		console.log("Life cycle method 2 :: component Did mount");
	}

	/* Life cycle method 3 */
	componentWillReceiveProps(nprops){
		console.log("Life cycle method 3 :: component componentWillReceiveProps",nprops);
	}
	/* Life cycle method 4 */
	shouldComponentUpdate(nprops,nstate){
		console.log("Life cycle method 4 :: component shouldComponentUpdate",nprops,nstate);
		return true;
	}
	/* Life cycle method 5 */
	componentWillUpdate(nprops,nstate){
		console.log("Life cycle method 5 :: component Will Update",nprops,nstate);
	}
	/* Life cycle method 6 */
	componentDidUpdate(pprops,pstate){
		console.log("Life cycle method 6 :: component Will Update",pprops,pstate);
	}
	/* Life cycle method 7 */
	componentWillUnmount(){
		console.log("Life cycle method 7 ::  component Will Unmount");
	}

	btnOlder(){
		this.setState ( {
			age : this.state.age + 5
		});	
	}
	onchangeName() {
		this.props.changeName(this.state.userName);
	}
	onHangleTextChange(e){
		this.setState({
			userName : e.target.value
		})
	}
	render(){
		return (
				<div>
					<p> Home component renders ! </p>
					<p> Your name is {this.props.name}</p>
					<p> Your Age is {this.state.age}</p>
					<button onClick={() => this.btnOlder()} className="btn btn-primary">Old-Age! </button>
					<hr />
					<button onClick={this.props.sayHello} className="btn btn-primary">Greeting</button>
					<hr />
					<input type="text" value = {this.state.userName} onChange={this.onHangleTextChange.bind(this)} />
					<button  className="btn btn-primary" onClick={this.onchangeName.bind(this)}>Change Name</button>
				</div>
		);
	}
}

Home2.propTypes = {
	name: PropTypes.string,
	age : PropTypes.number,
	sayHello : PropTypes.func
}
