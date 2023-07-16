import React, { Component } from "react";

class NameClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "old name",
		};
		this.updatName = this.updateName.bind(this);
	}

	updateName = () => {
		this.setState({
			...this.state,
			name: "new name",
		});
	};

	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<button onClick={this.updateName}>change</button>
			</div>
		);
	}
}

export default NameClassComponent;
