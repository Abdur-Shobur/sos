import React, { useState } from 'react';

function AddNewCategory() {
	const [tags, setTegs] = useState([]);
	const get_tags = (e) => {
		if (e.key === 'Enter') {
			console.log('do validate');
		}
		// console.log(e);
	};
	const handel_category_create = async (e) => {
		e.preventDefault();
		const target = e.target;
		const name = target.name.value;
		const slug = target.slug.value;
		const description = target.description.value;
		const group_tag = target.group_tag.value;
		const status = target.status.value;
		const data = {
			name,
			slug,
			description,
			group_tag,
			status,
		};
		console.log(data);
		const fetching = await fetch(
			`${process.env.REACT_APP_BASE_URL}/store-category`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			}
		);
		const response = await fetching.json();
		console.log(response);
	};
	return (
		<div className="col-xl-4 col-lg-12">
			<div className="ec-cat-list card card-default mb-24px">
				<div className="card-body">
					<div className="ec-cat-form">
						<h4>Add New Category</h4>

						<form onSubmit={handel_category_create}>
							<div className="form-group row">
								<label htmlFor="text" className="col-12 col-form-label">
									Name
								</label>
								<div className="col-12">
									<input
										id="text"
										name="name"
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
								<select
									name="status"
									className="form-control here set-slug"
									aria-label=".form-select-sm example"
								>
									<option value="inActive">In Active</option>
									<option value="active">Active</option>
								</select>
							</div>

							<div className="form-group row">
								<label className="col-12 col-form-label">Description</label>
								<div className="col-12">
									<textarea
										id="description"
										name="description"
										cols="40"
										rows="4"
										className="form-control"
									></textarea>
								</div>
							</div>

							<div className="form-group row">
								<label className="col-12 col-form-label">
									Product Tags
									<span> ( Type and make comma to separate tags )</span>
								</label>
								<div className="col-12">
									<input
										onKeyDown={get_tags}
										type="text"
										className="form-control"
										id="group_tag"
										name="group_tag"
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

export default AddNewCategory;
