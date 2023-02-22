import React from 'react';
import p1 from '../../assets/img/products/p1.jpg';

function ProductListRow() {
	return (
		<tr>
			<td>
				<img className="tbl-thumb" src={p1} alt="Product Images" />
			</td>
			<td>Baby shoes</td>
			<td>$20</td>
			<td>25% OFF</td>
			<td>61</td>
			<td>5421</td>
			<td>ACTIVE</td>
			<td>2021-10-30</td>
			<td>
				<div className="btn-group mb-1">
					<button
						style={{ padding: '3px 10px' }}
						type="button"
						className="btn btn-outline-success"
					>
						Info
					</button>
					<button
						type="button"
						className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						data-display="static"
					>
						<span className="sr-only">Info</span>
					</button>

					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							Edit
						</a>
						<a className="dropdown-item" href="#">
							Delete
						</a>
					</div>
				</div>
			</td>
		</tr>
	);
}

export default ProductListRow;
