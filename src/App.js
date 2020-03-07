import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
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
			}
		]
	}
	render() {
		return (
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<h3 className="display-5">Marcas</h3>
						<hr/>
							<table className="table table-striped bg-white">
								<thead>
									<th>Marca</th>
									<th>Descripcion</th>
									<th>Accion</th>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						 {/*table: listando todas las marcas*/}
					</div>
					<div className="col-md-6">
						<h3 className="display-5">Añadir Marcas</h3>
						<hr/>
					{/*Form: con todos los input necesarios para dar de alta una nueva marca*/}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
