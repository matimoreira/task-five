import React from 'react';
import Brand from './../brand/Brand';

const Table = (props) => {

	const elements = 5;


	const listOfBrand = props.rows.map((row, i) => {
		return <Brand row={row} key={i} id={i} deleteBrand={props.deleteBrand}></Brand>
	})

	const pages = listOfBrand.length / elements;

	return(
		<div className='rounded border border-light shadow'>
			<table className="table table-striped bg-white">
				<thead>
					<tr>
						<th>Id</th>
						<th>Marca</th>
						<th>Estado</th>
						<th>Accion</th>
					</tr>
				</thead>
				<tbody>
					{ listOfBrand.filter((value, index, array) => { return index < 5; }) }
				</tbody>
			</table>
			{/*<Pagination pages={pages} ></Pagination>*/}



			<nav className="d-flex justify-content-center">
				<ul className="pagination">
					<li className="page-item">
						<a className="page-link text-dark" href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">1</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">2</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">3</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Table;