import React from 'react';
import ProductListRow from './ProductListRow';

function ProductLIstTable() {
	return (
		<table
			id="responsive-data-table"
			className="table"
			style={{ width: '100%' }}
		>
			<thead>
				<tr>
					<th>Product</th>
					<th>Name</th>
					<th>Price</th>
					<th>Offer</th>
					<th>Purchased</th>
					<th>Stock</th>
					<th>Status</th>
					<th>Date</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody style={{ verticalAlign: 'middle' }}>
				<ProductListRow />
				<ProductListRow />
				<ProductListRow />
				<ProductListRow />
			</tbody>
		</table>
	);
}

export default ProductLIstTable;
