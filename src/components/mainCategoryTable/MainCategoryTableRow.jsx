import React from 'react';
import clothes from '../../assets/img/category/clothes.png';
function MainCategoryTableRow({ data }) {
	const { name } = data;
	return (
		<tr>
			<td>
				<img className="cat-thumb" src={clothes} alt="Product-Images" />
			</td>
			<td>{name}</td>
			<td>
				<span className="ec-sub-cat-list">
					<span className="ec-sub-cat-count" title="Total Sub Categories">
						5
					</span>
					<span className="ec-sub-cat-tag">T-shirt</span>
					<span className="ec-sub-cat-tag">Shirt</span>
					<span className="ec-sub-cat-tag">Dress</span>
					<span className="ec-sub-cat-tag">Jeans</span>
					<span className="ec-sub-cat-tag">Top</span>
				</span>
			</td>
			<td>28</td>
			<td>2161</td>
			<td>ACTIVE</td>
			<td>
				<span className="badge badge-success">Top</span>
			</td>
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

export default MainCategoryTableRow;
