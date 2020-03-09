import React from 'react';
import Table from './../table/Table';
import Form from './../form/Form';

const Header = (props) => {
	return (
		<div className="row">
			<div className="col-md-6">
				<h3 className="display-5">{`Añadir ${props.title}`}</h3>
				<hr/>
				<Form onFormSubmit={props.addBrand}></Form>
			</div>
			<div className="col-md-6">
				<h3 className="display-5">{props.title}</h3>
				<hr/>
				<Table rows ={props.rows} deleteBrand={props.deleteBrand}></Table>
			</div>
			
		</div>
	);
}

export default Header;