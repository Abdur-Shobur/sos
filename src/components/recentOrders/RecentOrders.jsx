import React from 'react';
import RecentOrdersRow from './RecentOrdersRow';

function RecentOrders() {
	return (
		<div
			className="card card-table-border-none card-default recent-orders"
			id="recent-orders"
		>
			<div className="card-header justify-content-between">
				<h2>Recent Orders</h2>
				<div className="date-range-report">
					<span></span>
				</div>
			</div>
			<div className="card-body pt-0 pb-5">
				<table
					className="table card-table table-responsive table-responsive-large"
					style={{ width: '100%' }}
				>
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Product Name</th>
							<th className="d-none d-lg-table-cell">Units</th>
							<th className="d-none d-lg-table-cell">Order Date</th>
							<th className="d-none d-lg-table-cell">Order Cost</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<RecentOrdersRow />
						<RecentOrdersRow />
						<RecentOrdersRow />
						<RecentOrdersRow />
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default RecentOrders;
