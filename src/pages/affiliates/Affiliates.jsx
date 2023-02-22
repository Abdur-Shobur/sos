import React from 'react';
import { Link } from 'react-router-dom';
import VendorListRow from '../../components/vendorsTable/VendorListRow';

function Affiliates() {
	return (
		<div className="ec-content-wrapper">
			<div className="content">
				<div className="breadcrumb-wrapper breadcrumb-contacts">
					<div>
						<h1>User List</h1>
						<p className="breadcrumbs">
							<span>
								<Link to={'/'}>Home</Link>
							</span>
							<span>
								<i className="mdi mdi-chevron-right"></i>
							</span>
							Vendor
						</p>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#addVendor"
						>
							Add Vendor
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="ec-vendor-list card card-default">
							<div className="card-body">
								<div className="table-responsive">
									<table id="responsive-data-table" className="table">
										<thead>
											<tr>
												<th>Profile</th>
												<th>Name</th>
												<th>Email</th>
												<th>Product</th>
												<th>Total Buy</th>
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
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Add Vendor Modal  --> */}
				<div
					className="modal fade modal-add-contact"
					id="addVendor"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div
						className="modal-dialog modal-dialog-centered modal-lg"
						role="document"
					>
						<div className="modal-content">
							<form>
								<div className="modal-header px-4">
									<h5 className="modal-title" id="exampleModalCenterTitle">
										Add New Vendor
									</h5>
								</div>

								<div className="modal-body px-4">
									<div className="form-group row mb-6">
										<label
											htmlFor="coverImage"
											className="col-sm-4 col-lg-2 col-form-label"
										>
											Vendor Image
										</label>

										<div className="col-sm-8 col-lg-10">
											<div className="custom-file mb-1">
												<input
													type="file"
													className="custom-file-input"
													id="coverImage"
													required
												/>
												<label
													className="custom-file-label"
													htmlFor="coverImage"
												>
													Choose file...
												</label>
												<div className="invalid-feedback">
													Example invalid custom file feedback
												</div>
											</div>
										</div>
									</div>

									<div className="row mb-2">
										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="firstName">First name</label>
												<input
													type="text"
													className="form-control"
													id="firstName"
													// value="John"
												/>
											</div>
										</div>

										<div className="col-lg-6">
											<div className="form-group">
												<label htmlFor="lastName">Last name</label>
												<input
													type="text"
													className="form-control"
													id="lastName"
													// value="Deo"
												/>
											</div>
										</div>

										<div className="col-lg-6">
											<div className="form-group mb-4">
												<label htmlFor="userName">User name</label>
												<input
													type="text"
													className="form-control"
													id="userName"
													// value="johndoe"
												/>
											</div>
										</div>

										<div className="col-lg-6">
											<div className="form-group mb-4">
												<label htmlFor="email">Email</label>
												<input
													type="email"
													className="form-control"
													id="email"
													// value="johnexample@gmail.com"
												/>
											</div>
										</div>

										<div className="col-lg-6">
											<div className="form-group mb-4">
												<label htmlFor="Birthday">Birthday</label>
												<input
													type="text"
													className="form-control"
													id="Birthday"
													// value="10-12-1991"
												/>
											</div>
										</div>

										<div className="col-lg-6">
											<div className="form-group mb-4">
												<label htmlFor="event">Address</label>
												<input
													type="text"
													className="form-control"
													id="event"
													// value="Address here"
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="modal-footer px-4">
									<button
										type="button"
										className="btn btn-secondary btn-pill"
										data-bs-dismiss="modal"
									>
										Cancel
									</button>
									<button type="button" className="btn btn-primary btn-pill">
										Save Contact
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Affiliates;
