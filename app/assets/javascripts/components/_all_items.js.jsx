var AllItems = React.createClass({
	handleDelete(id) {
		this.props.handleDelete(id);
	},

	handleEdit(id) {
		this.props.handleDelete(id);
	},

	onUpdate(id) {
		this.props.onUpdate(id);
	},

	render() {
		var items = this.props.items.map((item) => {
			return (
				<div key={item.id}>
					<Item item={item}
						handleDelete={this.handleDelete.bind(this, item.id)}
						handleEdit={this.handleEdit}
						handleUpdate={this.onUpdate} />
				</div>
			)
		})
		return (
			<div>
				{items}
			</div>
		)
	}
})