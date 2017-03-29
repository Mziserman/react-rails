 var NewItem = React.createClass({
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;

		$.ajax({
			url: 'api/v1/items',
			type: 'POST',
			data: { item: { name: name, description: description } },
			success: (response) => {
				this.props.handleSubmit(response);
			}
		})
	},

	render() {
		return (
			<div>
				<h1>New item</h1>
				<input ref="name" placeholder="name" />
				<input ref="description" placeholder="description" />
				<button onClick={this.handleClick}>submit</button>
			</div>
		)
	}
})