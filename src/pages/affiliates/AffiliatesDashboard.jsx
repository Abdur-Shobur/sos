import React from 'react';
import RatioCard from '../../components/cards/RatioCard';
import NewCustomers from '../../components/newCustomers/NewCustomers';
import RecentOrders from '../../components/recentOrders/RecentOrders';
import SoldByItems from '../../components/soldByItems/SoldByItems';
import TopProducts from '../../components/topProducts/TopProducts';

function AffiliatesDashboard() {
	return (
		<>
			<div className="content">
				{/* <!-- Top Statistics --> */}
				<div className="row">
					<RatioCard count={1500} title="Daily Signups" />
					<RatioCard count={79503} title="Daily Visitors" />
					<RatioCard count={15503} title="Daily Order" />
					<RatioCard count={98503} title="Daily Revenue" />
				</div>

				<div className="row">
					<div className="col-xl-8 col-md-12 p-b-15">
						{/* <!-- Sales Graph --> */}
						<div id="user-acquisition" className="card card-default">
							<div className="card-header">
								<h2>Sales Report</h2>
							</div>
							<div className="card-body">
								<ul
									className="nav nav-tabs nav-style-border justify-content-between justify-content-lg-start border-bottom"
									role="tablist"
								>
									<li className="nav-item">
										<a
											className="nav-link active"
											data-bs-toggle="tab"
											href="#todays"
											role="tab"
											aria-selected="true"
										>
											Today's
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											data-bs-toggle="tab"
											href="#monthly"
											role="tab"
											aria-selected="false"
										>
											Monthly{' '}
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											data-bs-toggle="tab"
											href="#yearly"
											role="tab"
											aria-selected="false"
										>
											Yearly
										</a>
									</li>
								</ul>
								<div className="tab-content pt-4" id="salesReport">
									<div
										className="tab-pane fade show active"
										id="source-medium"
										role="tabpanel"
									>
										{/* <div className="mb-6" 	style={{maxHeight:"240px"}}    */}
										<canvas id="acquisition" className="chartjs2"></canvas>
										<div id="acqLegend" className="customLegend mb-2"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-12 p-b-15">
						{/* <!-- Doughnut Chart --> */}
						<div className="card card-default">
							<div className="card-header justify-content-center">
								<h2>Orders Overview</h2>
							</div>
							<div className="card-body">
								<canvas id="doChart"></canvas>
							</div>
							<a href="#" className="pb-5 d-block text-center text-muted">
								<i className="mdi mdi-download mr-2"></i> Download overall
								report
							</a>
							<div className="card-footer d-flex flex-wrap bg-white p-0">
								<div className="col-6">
									<div className="p-20">
										<ul className="d-flex flex-column justify-content-between">
											<li className="mb-2">
												<i
													className="mdi mdi-checkbox-blank-circle-outline mr-2"
													style={{ color: '#4c84ff' }}
												></i>
												Order Completed
											</li>
											<li className="mb-2">
												<i
													className="mdi mdi-checkbox-blank-circle-outline mr-2"
													style={{ color: '#80e1c1' }}
												></i>
												Order Unpaid
											</li>
											<li>
												<i
													className="mdi mdi-checkbox-blank-circle-outline mr-2"
													style={{ color: '#ff7b7b' }}
												></i>
												Order returned
											</li>
										</ul>
									</div>
								</div>
								<div className="col-6 border-left">
									<div className="p-20">
										<ul className="d-flex flex-column justify-content-between">
											<li className="mb-2">
												<i
													className="mdi mdi-checkbox-blank-circle-outline mr-2"
													style={{ color: '#8061ef' }}
												></i>
												Order Pending
											</li>
											<li className="mb-2">
												<i
													className="mdi mdi-checkbox-blank-circle-outline mr-2"
													style={{ color: '#ffa128' }}
												></i>
												Order Canceled
											</li>
											<li>
												<i
													className="mdi mdi-checkbox-blank-circle-outline mr-2"
													style={{ color: '#7be6ff' }}
												></i>
												Order Broken
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xl-8 col-md-12 p-b-15">
						{/* <!-- User activity statistics --> */}
						<div className="card card-default" id="user-activity">
							<div className="no-gutters">
								<div>
									<div className="card-header justify-content-between">
										<h2>User Activity</h2>
										<div className="date-range-report ">
											<span></span>
										</div>
									</div>
									<div className="card-body">
										<div className="tab-content" id="userActivityContent">
											<div
												className="tab-pane fade show active"
												id="user"
												role="tabpanel"
											>
												<canvas id="activity" className="chartjs"></canvas>
											</div>
										</div>
									</div>
									<div className="card-footer d-flex flex-wrap bg-white border-top">
										<a href="#" className="text-uppercase py-3">
											In-Detail Overview
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-12 p-b-15">
						<div className="card card-default">
							<div className="card-header flex-column align-items-start">
								<h2>Current Users</h2>
							</div>
							<div className="card-body">
								<canvas id="currentUser" className="chartjs"></canvas>
							</div>
							<div className="card-footer d-flex flex-wrap bg-white border-top">
								<a href="#" className="text-uppercase py-3">
									In-Detail Overview
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xl-8 col-12 p-b-15">
						{/* <!-- World Chart --> */}
						<div className="card card-default" id="analytics-country">
							<div className="card-header justify-content-between">
								<h2>Purchased by Country</h2>
								<div className="date-range-report ">
									<span></span>
								</div>
							</div>
							<div className="card-body vector-map-world-2">
								<div
									id="regions_purchase"
									style={{ height: '100%', width: '100%' }}
								></div>
							</div>
							<div className="border-top mt-3">
								<div className="row no-gutters">
									<div className="col-lg-6">
										<div className="world-data-chart border-bottom pt-15px pb-15px">
											<canvas id="hbar1" className="chartjs"></canvas>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="world-data-chart pt-15px pb-15px">
											<canvas id="hbar2" className="chartjs"></canvas>
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer d-flex flex-wrap bg-white">
								<a href="#" className="text-uppercase py-3">
									In-Detail Overview
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-12 p-b-15">
						{/* <!-- Top Sell Table --> */}
						<SoldByItems />
					</div>
				</div>

				<div className="row">
					<div className="col-12 p-b-15">
						{/* <!-- Recent Order Table --> */}
						<RecentOrders />
					</div>
				</div>

				<div className="row">
					<div className="col-xl-5">
						{/* <!-- New Customers --> */}
						<NewCustomers />
					</div>

					<div className="col-xl-7">
						{/* <!-- Top Products --> */}
						<TopProducts />
					</div>
				</div>
			</div>
		</>
	);
}

export default AffiliatesDashboard;
