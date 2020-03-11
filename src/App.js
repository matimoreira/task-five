import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';

class App extends React.Component {
	title = 'Marcas';


	state = {brands: [{id: 1, marca: 'Fiat', estado: 1}], pagination: {page: 0, pageSize: 5, pageTotal: 1}};

	newsBrands = {};

	handleDeleteBrand = async (index, id) => {
		let response = await fetch(`https://localhost:5001/api/Vehiclebrand/${id}`, {method: 'DELETE'})
		console.log(response);
		console.log(`Id del elemento a eliminar: ${id}`);
		this.newsBrands = this.state.brands;
		this.newsBrands.splice(index, 1);
		this.setState({brands: this.newsBrands})
	}

	handlePaginationBrand = async (start, end) => {
		let response = await fetch(
			`https://localhost:5001/api/Vehiclebrand/GetVehiclebrand/
			${start}/
			${end}`
			);
		let json = await response.json();
		this.setState( ( json === '' ? { brands: ['Error'] } : { brands: json, page: start / this.state.pagination.pageSize} ) );

	}


	handleGetTotalPage = async () => {
		let response = await fetch(
		`https://localhost:5001/api/Vehiclebrand/GetTotalPage/
		${this.state.pagination.pageSize}`);
		let json = await response.json();
		console.log(json);
		this.setState( ( json === '' ? { pageTotal: ['Error'] } : { pageTotal: json } ) );
	}



	handleAddBrand = async (brand) => {

		let body = {
			'id': parseInt(brand.id),
			'name': brand.name,
			'enterpriseid': 1,
			'active': brand.active,
			'vehiclemodel': []
		}

		let settings = {
			method: 'POST',
  			body: JSON.stringify(body),
  			headers:{
    			'Content-Type': 'application/json'
  			}
  		}
  		console.log(body);
		let response = await fetch(`https://localhost:5001/api/Vehiclebrand`, settings)
		console.log(response);
		console.log(`elemento a agregar: ${brand}`);
		this.setState({brands: [...this.state.brands, brand]})
	}

	async componentDidMount() {
		this.handlePaginationBrand(this.state.pagination.page, this.state.pagination.pageSize);
		this.handleGetTotalPage();
	}

	render() {
		return (
			<div className="container mt-5">
				<Header 
					title={this.title}
					rows={this.state.brands}
					deleteBrand={this.handleDeleteBrand}
					addBrand={this.handleAddBrand}
					paginationBrand={this.handlePaginationBrand}
					pageTotal={this.state.pagination.pageTotal}
					pageSize={this.state.pagination.pageSize}
					page={this.state.pagination.page}>
				</Header>
			</div>
		);
	}
}

export default App;
