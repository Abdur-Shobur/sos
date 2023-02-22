import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import VendorSidebar from '../components/sidebar/VendorSidebar';
import TopNavBar from '../components/topNavBar/TopNavBar';

function VendorLayout() {
	return (
		<div
			className="ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light"
			id="body"
		>
			<div className="wrapper">
				{/* <!-- LEFT MAIN SIDEBAR --> */}
				<VendorSidebar />

				<div className="ec-page-wrapper">
					{/* <!-- Top Nav Bar --> */}
					<TopNavBar />
					<div className="ec-content-wrapper">
						<Outlet />
					</div>

					<Footer />
				</div>

				{/* footer  */}
			</div>
		</div>
	);
}

export default VendorLayout;
