import React from 'react';
const Brand = (props) => {
	return(
		<tr>
			<td>{props.row.id}</td>
			<td>{props.row.name}</td>
			<td>{props.row.active === null ? 'Inactivo' : 'Activo'}</td>
			<td><button className="btn btn-danger" onClick={() => {props.deleteBrand(props.id, props.row.id)} }>Eliminar</button></td>
		</tr>
	);
}
export default Brand;