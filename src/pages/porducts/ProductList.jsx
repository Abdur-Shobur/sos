import React from 'react';
import ProductLIstTable from '../../components/productsList/ProductLIstTable';

function ProductList() {
	return (
		<div className="ec-content-wrapper">
			<div className="content">
				<div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
					<div>
						<h1>Product</h1>
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
							{' '}
							Add Porduct
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="card card-default">
							<div className="card-body">
								<div className="table-responsive">
									<ProductLIstTable />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductList;
