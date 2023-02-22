import React from 'react';
import u1 from '../../assets/img/vendor/u1.jpg';
function VendorListRow() {
	return (
		<tr>
			<td>
				<img className="vendor-thumb" src={u1} alt="vendor-images" />
			</td>
			<td>Marlee Rena</td>
			<td>marleerena@gmail.com</td>
			<td>28</td>
			<td>2161</td>
			<td>ACTIVE</td>
			<td>2021-10-30</td>
			<td>
				<div className="btn-group">
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

export default VendorListRow;
