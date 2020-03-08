import React from 'react';
import './App.css';
import Header from './header/Header';
import logo from './logo.svg';

class App extends React.Component {
	title = 'Marcas';


	state = {
		brands: [
			{
				id: 1,
				marca: 'Fiat',
				description: 'Auto piola'
			},
			{
				id: 2,
				marca: 'Ford',
				description: 'Auto un poco mas piola'
			},
			{
				id: 3,
				marca: 'Toyota',
				description: '4x4=16'
			}
		]
	}
	render() {
		return (
			<div className="container mt-5">
				<Header title={this.title} rows={this.state.brands}></Header>
			</div>
		);
	}
}

export default App;
