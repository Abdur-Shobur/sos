import React from 'react';
import SubCategoryTableRow from './SubCategoryTableRow';

function SubCategoryTable() {
	return (
		<div className="col-xl-8 col-lg-12">
			<div className="ec-cat-list card card-default">
				<div className="card-body">
					<div className="table-responsive">
						<table id="responsive-data-table" className="table">
							<thead>
								<tr>
									<th>Thumb</th>
									<th>Name</th>
									<th>Main Categories</th>
									<th>Product</th>
									<th>Total Sell</th>
									<th>Status</th>
									<th>Trending</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody style={{ verticalAlign: 'middle' }}>
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
								<SubCategoryTableRow />
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubCategoryTable;
