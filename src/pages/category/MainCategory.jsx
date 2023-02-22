import React from 'react';
import AddNewCategory from '../../components/addNewCategory/AddNewCategory';
import MainCategoryTable from '../../components/mainCategoryTable/MainCategoryTable';

function MainCategory() {
	return (
		<div className="ec-content-wrapper">
			<div className="content">
				<div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
					<h1>Main Category</h1>
					<p className="breadcrumbs">
						<span>
							<a href="index.html">Home</a>
						</span>
						<span>
							<i className="mdi mdi-chevron-right"></i>
						</span>
						Main Category
					</p>
				</div>
				<div className="row">
					<AddNewCategory />
					<MainCategoryTable />
				</div>
			</div>
		</div>
	);
}

export default MainCategory;
