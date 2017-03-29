var Main = React.createClass({
	
	getInitialState() {
		return { items: [] };
	},

	componentDidMount() {
		$.getJSON('/api/v1/items.json', (response) => {
			this.setState({items: newState});
		})
	},

	handleSubmit(response) {
		var newState = this.state.items.concat(response);
		this.setState({items: newState});
	},

	handleDelete(id) {
		$.ajax({
			url: '/api/v1/items/' + id,
			type: 'DELETE',
			success:() => {
				this.removeDeletedItem(id)
			}
		})
	},

	onUpdate(item) {
		$.ajax({
			url: '/api/v1/items/' + item.id,
			type: 'PUT',
			data: {item: item},
			success: () => {
				this.updateItem(item);
			}
		})
	},

	removeDeletedItem(id) {
		var items = this.state.items.filter((item) => {
			return item.id != id;
		});

		this.setState({ items: items })
	},

	updateItem(item) {
		var updatedItemIndex;
		var items = this.state.items.filter((iteritem, i) => {
			if (iteritem.id == item.id) {
				updatedItemIndex = i;
			}
			return iteritem.id != item.id;
		});
		items.splice(updatedItemIndex, 0, item);

		this.setState({ items: items })
	},

	render() {
		return (
			<div>
				<Header />
				<NewItem handleSubmit={this.handleSubmit} />
				<AllItems items={this.state.items} 
					handleDelete={this.handleDelete}
					onUpdate={this.onUpdate} />
			</div>
		)
	}
})