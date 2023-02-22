import React from 'react';

function AddNewSubCategory() {
	return (
		<div className="col-xl-4 col-lg-12">
			<div className="ec-cat-list card card-default mb-24px">
				<div className="card-body">
					<div className="ec-cat-form">
						<h4>Add Sub Category</h4>

						<form>
							<div className="form-group row">
								<label htmlFor="text" className="col-12 col-form-label">
									Name
								</label>
								<div className="col-12">
									<input
										id="text"
										name="text"
										className="form-control here slug-title"
										type="text"
									/>
								</div>
							</div>

							<div className="form-group row">
								<label htmlFor="slug" className="col-12 col-form-label">
									Slug
								</label>
								<div className="col-12">
									<input
										id="slug"
										name="slug"
										className="form-control here set-slug"
										type="text"
									/>
									<small>
										The “slug” is the URL-friendly version of the name. It is
										usually all lowercase and contains only letters, numbers,
										and hyphens.
									</small>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-12 col-form-label">
									Sort Description
								</label>
								<div className="col-12">
									<textarea
										id="sortdescription"
										name="sortdescription"
										cols="40"
										rows="2"
										className="form-control"
									></textarea>
								</div>
							</div>

							<div className="form-group row">
								<label
									htmlFor="parent-category"
									className="col-12 col-form-label"
								>
									Parent Category
								</label>
								<div className="col-12">
									<select
										id="parent-category"
										name="parent-category"
										className="custom-select"
									>
										<option value="">Clothes</option>
										<option value="uncategorized">Footwear</option>
										<option value="new category">Jewellry</option>
										<option value="new category">Perfume</option>
										<option value="new category">Cosmatics</option>
										<option value="new category">Glasses</option>
										<option value="new category">Bags</option>
									</select>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-12 col-form-label">
									Full Description
								</label>
								<div className="col-12">
									<textarea
										id="fulldescription"
										name="fulldescription"
										cols="40"
										rows="4"
										className="form-control"
									></textarea>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-12 col-form-label">
									Product Tags{' '}
									<span>( Type and make comma to separate tags )</span>
								</label>
								<div className="col-12">
									<input
										type="text"
										className="form-control"
										id="group_tag"
										name="group_tag"
										value=""
										placeholder=""
										data-role="tagsinput"
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-12">
									<button
										name="submit"
										type="submit"
										className="btn btn-primary"
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddNewSubCategory;
