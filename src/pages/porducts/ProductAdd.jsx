import React from 'react';
import edit from '../../assets/img/icons/edit.svg';
import venderUploadPreview from '../../assets/img/products/vender-upload-preview.jpg';
import preview from '../../assets/img/products/vender-upload-thumb-preview.jpg';
function ProductAdd() {
	return (
		<div className="ec-content-wrapper">
			<div className="content">
				<div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
					<div>
						<h1>Add Product</h1>
						<p className="breadcrumbs">
							<span>
								<a href="index.html">Home</a>
							</span>
							<span>
								<i className="mdi mdi-chevron-right"></i>
							</span>
							Product
						</p>
					</div>
					<div>
						<a href="product-list.html" className="btn btn-primary">
							View All
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="card card-default">
							<div className="card-header card-header-border-bottom">
								<h2>Add Product</h2>
							</div>

							<div className="card-body">
								<div className="row ec-vendor-uploads">
									<div className="col-lg-4">
										<div className="ec-vendor-img-upload">
											<div className="ec-vendor-main-img">
												<div className="avatar-upload">
													<div className="avatar-edit">
														<input
															type="file"
															id="imageUpload"
															className="ec-image-upload"
															accept=".png, .jpg, .jpeg"
														/>
														<label htmlFor="imageUpload">
															<img
																src={edit}
																className="svg_img header_svg"
																alt="edit"
															/>
														</label>
													</div>
													<div className="avatar-preview ec-preview">
														<div className="imagePreview ec-div-preview">
															<img
																className="ec-image-preview"
																src={venderUploadPreview}
																alt="edit"
															/>
														</div>
													</div>
												</div>
												<div className="thumb-upload-set colo-md-12">
													<div className="thumb-upload">
														<div className="thumb-edit">
															<input
																type="file"
																id="thumbUpload01"
																className="ec-image-upload"
																accept=".png, .jpg, .jpeg"
															/>
															<label htmlFor="imageUpload">
																<img
																	src={edit}
																	className="svg_img header_svg"
																	alt="edit"
																/>
															</label>
														</div>
														<div className="thumb-preview ec-preview">
															<div className="image-thumb-preview">
																<img
																	className="image-thumb-preview ec-image-preview"
																	src={preview}
																	alt="edit"
																/>
															</div>
														</div>
													</div>
													<div className="thumb-upload">
														<div className="thumb-edit">
															<input
																type="file"
																id="thumbUpload02"
																className="ec-image-upload"
																accept=".png, .jpg, .jpeg"
															/>
															<label htmlFor="imageUpload">
																<img
																	src={edit}
																	className="svg_img header_svg"
																	alt="edit"
																/>
															</label>
														</div>
														<div className="thumb-preview ec-preview">
															<div className="image-thumb-preview">
																<img
																	className="image-thumb-preview ec-image-preview"
																	src={preview}
																	alt="edit"
																/>
															</div>
														</div>
													</div>
													<div className="thumb-upload">
														<div className="thumb-edit">
															<input
																type="file"
																id="thumbUpload03"
																className="ec-image-upload"
																accept=".png, .jpg, .jpeg"
															/>
															<label htmlFor="imageUpload">
																<img
																	src={edit}
																	className="svg_img header_svg"
																	alt="edit"
																/>
															</label>
														</div>
														<div className="thumb-preview ec-preview">
															<div className="image-thumb-preview">
																<img
																	className="image-thumb-preview ec-image-preview"
																	src={preview}
																	alt="edit"
																/>
															</div>
														</div>
													</div>
													<div className="thumb-upload">
														<div className="thumb-edit">
															<input
																type="file"
																id="thumbUpload04"
																className="ec-image-upload"
																accept=".png, .jpg, .jpeg"
															/>
															<label htmlFor="imageUpload">
																<img
																	src={edit}
																	className="svg_img header_svg"
																	alt="edit"
																/>
															</label>
														</div>
														<div className="thumb-preview ec-preview">
															<div className="image-thumb-preview">
																<img
																	className="image-thumb-preview ec-image-preview"
																	src={preview}
																	alt="edit"
																/>
															</div>
														</div>
													</div>
													<div className="thumb-upload">
														<div className="thumb-edit">
															<input
																type="file"
																id="thumbUpload05"
																className="ec-image-upload"
																accept=".png, .jpg, .jpeg"
															/>
															<label htmlFor="imageUpload">
																<img
																	src={edit}
																	className="svg_img header_svg"
																	alt="edit"
																/>
															</label>
														</div>
														<div className="thumb-preview ec-preview">
															<div className="image-thumb-preview">
																<img
																	className="image-thumb-preview ec-image-preview"
																	src={preview}
																	alt="edit"
																/>
															</div>
														</div>
													</div>
													<div className="thumb-upload">
														<div className="thumb-edit">
															<input
																type="file"
																id="thumbUpload06"
																className="ec-image-upload"
																accept=".png, .jpg, .jpeg"
															/>
															<label htmlFor="imageUpload">
																<img
																	src={edit}
																	className="svg_img header_svg"
																	alt="edit"
																/>
															</label>
														</div>
														<div className="thumb-preview ec-preview">
															<div className="image-thumb-preview">
																<img
																	className="image-thumb-preview ec-image-preview"
																	src={preview}
																	alt="edit"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-8">
										<div className="ec-vendor-upload-detail">
											<form className="row g-3">
												<div className="col-md-6">
													<label htmlFor="inputEmail4" className="form-label">
														Product name
													</label>
													<input
														type="text"
														className="form-control slug-title"
														id="inputEmail4"
													/>
												</div>
												<div className="col-md-6">
													<label className="form-label">
														Select Categories
													</label>
													<select
														name="categories"
														id="Categories"
														className="form-select"
													>
														<optgroup label="Fashion">
															<option value="t-shirt">T-shirt</option>
															<option value="dress">Dress</option>
														</optgroup>
														<optgroup label="Furniture">
															<option value="table">Table</option>
															<option value="sofa">Sofa</option>
														</optgroup>
														<optgroup label="Electronic">
															<option value="phone">I Phone</option>
															<option value="laptop">Laptop</option>
														</optgroup>
													</select>
												</div>
												<div className="col-md-12">
													<label
														htmlFor="slug"
														className="col-12 col-form-label"
													>
														Slug
													</label>
													<div className="col-12">
														<input
															id="slug"
															name="slug"
															className="form-control here set-slug"
															type="text"
														/>
													</div>
												</div>
												<div className="col-md-12">
													<label className="form-label">Sort Description</label>
													<textarea
														className="form-control"
														rows="2"
													></textarea>
												</div>
												<div className="col-md-4 mb-25">
													<label className="form-label">Colors</label>
													<input
														type="color"
														className="form-control form-control-color"
														id="exampleColorInput1"
														value="#ff6191"
														title="Choose your color"
													/>
													<input
														type="color"
														className="form-control form-control-color"
														id="exampleColorInput2"
														value="#33317d"
														title="Choose your color"
													/>
													<input
														type="color"
														className="form-control form-control-color"
														id="exampleColorInput3"
														value="#56d4b7"
														title="Choose your color"
													/>
													<input
														type="color"
														className="form-control form-control-color"
														id="exampleColorInput4"
														value="#009688"
														title="Choose your color"
													/>
												</div>
												<div className="col-md-8 mb-25">
													<label className="form-label">Size</label>
													<div className="form-checkbox-box">
														<div className="form-check form-check-inline">
															<input
																type="checkbox"
																name="size1"
																value="size"
															/>
															<label>S</label>
														</div>
														<div className="form-check form-check-inline">
															<input
																type="checkbox"
																name="size1"
																value="size"
															/>
															<label>M</label>
														</div>
														<div className="form-check form-check-inline">
															<input
																type="checkbox"
																name="size1"
																value="size"
															/>
															<label>L</label>
														</div>
														<div className="form-check form-check-inline">
															<input
																type="checkbox"
																name="size1"
																value="size"
															/>
															<label>XL</label>
														</div>
														<div className="form-check form-check-inline">
															<input
																type="checkbox"
																name="size1"
																value="size"
															/>
															<label>XXL</label>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<label className="form-label">
														Price <span>( In USD )</span>
													</label>
													<input
														type="number"
														className="form-control"
														id="price1"
													/>
												</div>
												<div className="col-md-6">
													<label className="form-label">Quantity</label>
													<input
														type="number"
														className="form-control"
														id="quantity1"
													/>
												</div>
												<div className="col-md-12">
													<label className="form-label">Ful Detail</label>
													<textarea
														className="form-control"
														rows="4"
													></textarea>
												</div>
												<div className="col-md-12">
													<label className="form-label">
														Product Tags{' '}
														<span>
															( Type and make comma to separate tags )
														</span>
													</label>
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
												<div className="col-md-12">
													<button type="submit" className="btn btn-primary">
														Submit
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductAdd;
