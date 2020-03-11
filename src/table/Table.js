import React from 'react';
import Brand from './../brand/Brand';
import Pagination from './../pagination/Pagination';

const Table = (props) => {

	

	const listOfBrand = props.rows.map((row, i) => {
		return <Brand row={row} key={i} id={i} deleteBrand={props.deleteBrand}></Brand>
	});

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
					{ listOfBrand }
				</tbody>
			</table>
			<Pagination
				paginationBrand={props.paginationBrand}
				pageSize={props.pageSize}
				page={props.page}
				pageTotal={props.pageTotal}>
			</Pagination>



			{/*<nav className="d-flex justify-content-center">
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
			</nav>*/}
		</div>
	);
}

export default Table;