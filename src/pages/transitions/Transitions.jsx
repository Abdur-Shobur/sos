import React from 'react';
import BrandCard from '../../components/cards/BrandCard';

function Transitions() {
	return (
		<div className="ec-content-wrapper">
			<div className="content">
				<div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
					<div>
						<h1>Brand</h1>
						<p className="breadcrumbs">
							<span>
								<a href="index.html">Home</a>
							</span>
							<span>
								<i className="mdi mdi-chevron-right"></i>
							</span>{' '}
							Brand
						</p>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#modal-add-member"
						>
							Add Brand
						</button>
					</div>
				</div>

				<div className="product-brand card card-default p-24px">
					<div className="row mb-m-24px">
						<BrandCard />
						<BrandCard />
						<BrandCard />
						<BrandCard />
						<BrandCard />
						<BrandCard />
						<BrandCard />
						<BrandCard />
					</div>
				</div>

				{/* <!-- Contact Modal --> */}
				<div
					className="modal fade"
					id="modal-contact"
					tabIndex="-1"
					role="dialog"
					aria-hidden="true"
				>
					<div
						className="modal-dialog modal-dialog-centered modal-lg"
						role="document"
					>
						<div className="modal-content">
							<div className="modal-header justify-content-end border-bottom-0">
								<button
									type="button"
									className="btn-edit-icon"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									<i className="mdi mdi-pencil"></i>
								</button>

								<div className="dropdown">
									<button
										className="btn-dots-icon"
										type="button"
										id="dropdownMenuButton"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<i className="mdi mdi-dots-vertical"></i>
									</button>

									<div className="dropdown-menu dropdown-menu-right">
										<a className="dropdown-item" href="#">
											Action
										</a>
										<a className="dropdown-item" href="#">
											Another action
										</a>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</div>
								</div>

								<button
									type="button"
									className="btn-close-icon"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									<i className="mdi mdi-close"></i>
								</button>
							</div>

							<div className="modal-body pt-0">
								<div className="row no-gutters">
									<div className="col-md-6">
										<div className="profile-content-left px-4">
											<div className="card text-center widget-profile px-0 border-0">
												<div className="card-img mx-auto rounded-circle">
													<img src="assets/img/user/u6.jpg" alt="user image" />
												</div>

												<div className="card-body">
													<h4 className="py-2 text-dark">Albrecht Straub</h4>
													<p>Albrecht.straub@gmail.com</p>
													<a
														className="btn btn-primary btn-pill btn-lg my-4"
														href="#"
													>
														Follow
													</a>
												</div>
											</div>

											<div className="d-flex justify-content-between ">
												<div className="text-center pb-4">
													<h6 className="text-dark pb-2">1503</h6>
													<p>Friends</p>
												</div>

												<div className="text-center pb-4">
													<h6 className="text-dark pb-2">2905</h6>
													<p>Followers</p>
												</div>

												<div className="text-center pb-4">
													<h6 className="text-dark pb-2">1200</h6>
													<p>Following</p>
												</div>
											</div>
										</div>
									</div>

									<div className="col-md-6">
										<div className="contact-info px-4">
											<h4 className="text-dark mb-1">Contact Details</h4>
											<p className="text-dark font-weight-medium pt-4 mb-2">
												Email address
											</p>
											<p>Albrecht.straub@gmail.com</p>
											<p className="text-dark font-weight-medium pt-4 mb-2">
												Phone Number
											</p>
											<p>+99 9539 2641 31</p>
											<p className="text-dark font-weight-medium pt-4 mb-2">
												Birthday
											</p>
											<p>Nov 15, 1990</p>
											<p className="text-dark font-weight-medium pt-4 mb-2">
												Event
											</p>
											<p>Lorem, ipsum dolor</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Add Contact Button  --> */}
				<div
					className="modal fade"
					id="modal-add-member"
					tabIndex="-1"
					role="dialog"
					aria-hidden="true"
				>
					<div
						className="modal-dialog modal-dialog-centered modal-sm"
						role="document"
					>
						<div className="modal-content">
							<form className="modal-header border-bottom-0">
								<input
									type="text"
									className="form-control"
									placeholder="Search..."
								/>
							</form>

							<div
								className="modal-body p-0"
								data-simplebar
								style={{ height: '320px' }}
							>
								<ul className="list-unstyled border-top mb-0">
									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/1.jpg"
													alt="Image"
												/>
												<span className="status away"></span>
											</div>
											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Earth Fashion</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" checked="checked" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message ">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/2.jpg"
													alt="Image"
												/>
												<span className="status active"></span>
											</div>
											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Leon Art</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" checked="checked" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/3.jpg"
													alt="Image"
												/>
												<span className="status away"></span>
											</div>
											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Amazonee</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/4.jpg"
													alt="Image"
												/>
												<span className="status active"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Wolmark</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/5.jpg"
													alt="Image"
												/>
												<span className="status away"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Nikey</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/1.jpg"
													alt="Image"
												/>
												<span className="status"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">William Fabric</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/2.jpg"
													alt="Image"
												/>
												<span className="status away"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Sophia Shop</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/3.jpg"
													alt="Image"
												/>
												<span className="status"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Etc Fashion</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/4.jpg"
													alt="Image"
												/>
												<span className="status away"></span>
											</div>
											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Aaren Mart</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/5.jpg"
													alt="Image"
												/>
												<span className="status"></span>
											</div>
											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Abby Cart</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/1.jpg"
													alt="Image"
												/>
												<span className="status away"></span>
											</div>
											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Abriel Creation</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/2.jpg"
													alt="Image"
												/>
												<span className="status active"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Emma Fashion</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/3.jpg"
													alt="Image"
												/>
												<span className="status"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Kings Fashion</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/4.jpg"
													alt="Image"
												/>
												<span className="status away"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Willyart</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="media media-message">
											<div className="position-relative mr-3">
												<img
													className="rounded-circle"
													src="assets/img/brand/5.jpg"
													alt="Image"
												/>
												<span className="status"></span>
											</div>

											<div className="media-body d-flex justify-content-between align-items-center">
												<div className="message-contents">
													<h4 className="title">Sophers</h4>
													<p className="last-msg">
														Lorem ipsum dolor sit, amet consectetur adipisicing
														elit. Nam itaque doloremque odio, eligendi delectus
														vitae.
													</p>
												</div>

												<div className="control outlined control-checkbox checkbox-primary">
													<input type="checkbox" />
													<div className="control-indicator"></div>
												</div>
											</div>
										</div>
									</li>
								</ul>
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
									Add new member
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Transitions;
