import React from 'react';
import Img_1 from '../../assets/img/brand/1.jpg';

function BrandCard() {
	return (
		<div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
			<div className="card card-default">
				<div className="card-body text-center p-24px">
					<div className="image mb-3">
						<img
							src={Img_1}
							className="img-fluid rounded-circle"
							alt="Avatar-Images"
						/>
					</div>

					<h5 className="card-title text-dark">Brand A</h5>
					<p className="item-count">
						2535<span> items</span>
					</p>
					<span className="brand-delete mdi mdi-delete-outline"></span>
				</div>
			</div>
		</div>
	);
}

export default BrandCard;
