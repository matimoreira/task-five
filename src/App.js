import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';

class App extends React.Component {
	title = 'Marcas';


	state = {brands: [{id: 1,marca: 'Fiat',estado: 1}]};

	handleDeleteBrand = async (index, id) => {
		let response = await fetch(`https://localhost:5001/api/Vehiclebrand/${id}`, {method: 'DELETE'})
		console.log(response);
		console.log(`Id del elemento a eliminar: ${id}`);
		const newsBrands = this.state.brands;
		newsBrands.splice(index, 1);
		this.setState({brands: newsBrands})
	}

	async componentDidMount() {
		let response = await fetch("https://localhost:5001/api/Vehiclebrand");
		let json = await response.json();
		this.setState( ( json === '' ? { brands: ['Error'] } : { brands: json } ) );
	}

	render() {
		return (
			<div className="container mt-5">
				<Header title={this.title} rows={this.state.brands} deleteBrand={this.handleDeleteBrand}></Header>
			</div>
		);
	}
}

export default App;
