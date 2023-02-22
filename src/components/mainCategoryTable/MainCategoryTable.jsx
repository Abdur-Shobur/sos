import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import MainCategoryTableRow from './MainCategoryTableRow';

function MainCategoryTable() {
	const { data } = useQuery('fetch_main_category_data', () => {
		return axios.get(`${process.env.REACT_APP_BASE_URL}/view-category`);
	});
	const category_data = data?.data?.category;
	return (
		<div className="col-xl-8 col-lg-12">
			<div className="ec-cat-list card card-default">
				<div className="card-body">
					<div style={{ overflowX: 'inherit' }} className="table-responsive">
						<table id="responsive-data-table" className="table">
							<thead>
								<tr>
									<th>Thumb</th>
									<th>Name</th>
									<th>Sub Categories</th>
									<th>Product</th>
									<th>Total Sell</th>
									<th>Status</th>
									<th>Trending</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody style={{ verticalAlign: 'middle' }}>
								{category_data?.map((e) => (
									<MainCategoryTableRow key={e.id} data={e} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainCategoryTable;
