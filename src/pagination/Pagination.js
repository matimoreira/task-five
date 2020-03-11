import React from 'react';

const Pagination = (props) => {


	const listOfPages = (props) => {
		console.log('caca');
		for (var i = 0; i < props.pageTotal; i++) {
			return( 
				<li className="page-item">
					<a onClick={() => {props.paginationBrand(i*props.pageSize, props.pageSize)} } className="page-link" href="#">i</a>
				</li>
				)
		}
	};

	return(
		<nav className="d-flex justify-content-center">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link disable" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				{ listOfPages }
				<li className="page-item">
					<a className="page-link" href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	)
}
export default Pagination
