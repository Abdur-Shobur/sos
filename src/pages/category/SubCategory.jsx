import React from 'react';
import AddNewSubCategory from '../../components/addNewCategory/AddNewSubCategory';
import SubCategoryTable from '../../components/subCategoryTable/SubCategoryTable';

function SubCategory() {
	return (
		<div className="ec-content-wrapper">
			<div className="content">
				<div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
					<h1>Sub Category</h1>
					<p className="breadcrumbs">
						<span>
							<a href="index.html">Home</a>
						</span>
						<span>
							<i className="mdi mdi-chevron-right"></i>
						</span>
						Sub Category
					</p>
				</div>
				<div className="row">
					<AddNewSubCategory />
					<SubCategoryTable />
				</div>
			</div>
		</div>
	);
}

export default SubCategory;
