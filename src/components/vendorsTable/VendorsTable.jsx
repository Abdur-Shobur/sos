import React from 'react';
import VendorListRow from './VendorListRow';

function VendorsTable() {
	return (
		<table id="responsive-data-table" className="table">
			<thead>
				<tr>
					<th>Profile</th>
					<th>Name</th>
					<th>Email</th>
					<th>Product</th>
					<th>Total Sell</th>
					<th>Status</th>
					<th>Join On</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody style={{ verticalAlign: 'middle' }}>
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
				<VendorListRow />
			</tbody>
		</table>
	);
}

export default VendorsTable;
