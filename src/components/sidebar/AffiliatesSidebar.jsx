import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function AffiliatesSidebar() {
	const [nav2, setNav2] = useState(false);

	return (
		<div className="ec-left-sidebar ec-bg-sidebar">
			<div id="sidebar" className="sidebar ec-sidebar-footer">
				<div className="ec-brand">
					<Link to={'/affiliates-dashboard'} title="SOS">
						<svg
							width="70"
							height="40"
							viewBox="0 0 100 65"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M65.8065 16.2954L61.7161 21.3353L59.4333 24.1475L55.3429 29.186L51.2526 24.1475L55.3429 19.1103L57.6258 16.2967L52.5778 10.0784L50.295 12.8906L46.2046 17.9291L38.727 27.1415L43.7736 33.3598L47.8639 38.3983L43.7736 43.4369L37.4448 51.2337L34.4696 54.8998L31.613 58.4191L26.4573 64.7694H0L5.15435 58.4191L8.01368 54.8998L24.2161 34.9383L28.3065 39.9768L16.1944 54.8998L13.3364 58.4191H23.4323L26.2889 54.8998L33.3544 46.1952L39.6832 38.3983L34.6366 32.18L30.5463 27.1415L34.6366 22.1029L42.1143 12.8906L46.2046 7.85206L48.4875 5.03852L52.5778 0L56.6682 5.03986L61.7161 11.2569L65.8065 16.2954Z"
								fill="url(#paint0_linear_236_1486)"
							/>
							<path
								d="M75.3165 28.0129L70.8504 22.5124L66.76 17.4739L62.6697 22.5124L60.3868 25.3246L56.2964 30.3645L48.8174 39.5755L44.7284 44.6154L38.3997 52.4108V52.4122L36.3794 54.8998L33.5228 58.4191L28.3684 64.7694H53.658L57.3739 60.1915L58.8123 58.4191L61.4642 55.1544L61.669 54.8998L68.9405 45.942L73.0309 40.9021L75.3138 38.0899L79.4055 33.0514L75.3165 28.0129ZM68.9419 35.8636L64.8515 40.9035L57.3739 50.1158L53.4896 54.8998L53.2836 55.1544L50.633 58.4191H41.7008L42.4886 57.4494L44.5587 54.8985L48.8174 49.6525L52.9078 44.614L60.3868 35.4016L64.4771 30.3618L66.76 27.5496L71.2248 33.0501L68.9419 35.8636Z"
								fill="url(#paint1_linear_236_1486)"
							/>
							<path
								d="M87.2536 58.4191L92.4079 64.7694H55.813L58.4528 61.5195L60.9687 58.4191L62.5404 56.481L63.8253 54.8998H72.006L69.148 58.4191H79.0715L76.2135 54.8998L74.1098 52.3071L70.0194 47.2686L74.1098 42.2287L76.3927 39.4165L80.483 34.378L84.5733 39.4165L97.1434 54.8998L100 58.4191H91.818L88.9614 54.8998L80.483 44.4564L78.2001 47.2673L84.3969 54.8998L87.2536 58.4191Z"
								fill="url(#paint2_linear_236_1486)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_236_1486"
									x1="3.56633"
									y1="68.3357"
									x2="62.2398"
									y2="9.66216"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#0060EB" />
									<stop offset="0.0561" stopColor="#0066EC" />
									<stop offset="0.6975" stopColor="#00A7F6" />
									<stop offset="1" stopColor="#00C0FA" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_236_1486"
									x1="32.4648"
									y1="68.8662"
									x2="75.3091"
									y2="26.0219"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#0060EB" />
									<stop offset="0.0561" stopColor="#0066EC" />
									<stop offset="0.6975" stopColor="#00A7F6" />
									<stop offset="1" stopColor="#00C0FA" />
								</linearGradient>
								<linearGradient
									id="paint2_linear_236_1486"
									x1="63.8418"
									y1="72.7983"
									x2="91.3728"
									y2="45.2672"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#0060EB" />
									<stop offset="0.0561" stopColor="#0066EC" />
									<stop offset="0.6975" stopColor="#00A7F6" />
									<stop offset="1" stopColor="#00C0FA" />
								</linearGradient>
							</defs>
						</svg>
						<small>Start Own Startup</small>
					</Link>
				</div>

				{/* <!-- begin sidebar scrollbar --> */}
				<div className="ec-navigation" data-simplebar>
					{/* <!-- sidebar menu --> */}
					<ul className="nav sidebar-inner" id="sidebar-menu">
						{/* <!-- Dashboard --> */}
						<li className="active">
							<NavLink
								to={'/affiliates-dashboard'}
								className="sidenav-item-link"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="mr-3"
								>
									<path
										d="M0 2.47934V9.09091H9.09091V0H2.47934C1.82178 0 1.19115 0.261215 0.726182 0.726182C0.261215 1.19115 0 1.82178 0 2.47934Z"
										fill="#fff"
									/>
									<path
										d="M17.5208 0H10.9092V9.09091H20.0001V2.47934C20.0001 1.82178 19.7389 1.19115 19.2739 0.726182C18.8089 0.261215 18.1783 0 17.5208 0V0Z"
										fill="#fff"
									/>
									<path
										d="M0 17.5207C0 18.1783 0.261215 18.8089 0.726182 19.2738C1.19115 19.7388 1.82178 20 2.47934 20H9.09091V10.9091H0V17.5207Z"
										fill="#fff"
									/>
									<path
										d="M10.9092 20H17.5208C18.1783 20 18.8089 19.7388 19.2739 19.2738C19.7389 18.8089 20.0001 18.1783 20.0001 17.5207V10.9091H10.9092V20Z"
										fill="#fff"
									/>
								</svg>
								<span className="nav-text">Dashboard</span>
							</NavLink>
							<hr />
						</li>

						{/* <!-- Products --> */}
						<li
							onClick={() => setNav2((e) => !e)}
							className={`has-sub ${nav2 && 'expand'}`}
						>
							<a className="sidenav-item-link" href="#">
								{/* <!-- <i className="mdi mdi-palette-advanced"></i> --> */}
								<svg
									width="20"
									height="22"
									viewBox="0 0 20 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="mr-3"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M9.54502 11.027V22L0 16.8641V6.01583L9.54502 11.027V11.027ZM20 16.8641L10.4541 21.9991V11.0289L20 6.07541V16.8641ZM4.64706 2.94421L14.2912 8.00767L10.0014 10.2332L0.480887 5.23487L4.64706 2.94421V2.94421ZM19.5209 5.29353L15.2811 7.49344L5.60793 2.41532L9.99955 0L19.5209 5.29353V5.29353Z"
										fill="#AEAEAE"
									/>
								</svg>
								<span className="nav-text">Products</span>{' '}
								<b className="caret"></b>
							</a>
							<div style={{ display: nav2 && 'block' }} className="collapse">
								<ul
									className="sub-menu"
									id="products"
									data-parent="#sidebar-menu"
								>
									<li className="">
										<Link
											to={'/affiliates-dashboard/product-add'}
											className="sidenav-item-link"
											href="product-add.html"
										>
											<span className="nav-text">Add Product</span>
										</Link>
									</li>
									<li className="">
										<Link
											to="/affiliates-dashboard/product-list"
											className="sidenav-item-link"
										>
											<span className="nav-text">All Products</span>
										</Link>
									</li>
								</ul>
							</div>
						</li>

						{/* <!-- Orders --> */}
						<li className="has-sub">
							<NavLink
								to="/affiliates-dashboard/orders-history"
								className="sidenav-item-link"
							>
								{/* <!-- <i className="mdi mdi-cart"></i> --> */}
								<svg
									width="20"
									className="mr-3"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.05183 20.7489C7.00678 20.7489 7.78091 19.9748 7.78091 19.0199C7.78091 18.0649 7.00678 17.2908 6.05183 17.2908C5.09689 17.2908 4.32275 18.0649 4.32275 19.0199C4.32275 19.9748 5.09689 20.7489 6.05183 20.7489Z"
										fill="#AEAEAE"
									/>
									<path
										d="M14.6971 20.7489C15.652 20.7489 16.4262 19.9748 16.4262 19.0199C16.4262 18.0649 15.652 17.2908 14.6971 17.2908C13.7422 17.2908 12.968 18.0649 12.968 19.0199C12.968 19.9748 13.7422 20.7489 14.6971 20.7489Z"
										fill="#AEAEAE"
									/>
									<path
										d="M15.5617 10.3745C14.6508 10.3755 13.7558 10.1364 12.9667 9.68128C12.1777 9.22613 11.5226 8.57101 11.0675 7.78196C10.6124 6.99291 10.3734 6.09782 10.3745 5.18693C10.3756 4.27604 10.6168 3.38155 11.0739 2.59362H3.66738L3.63107 2.2893C3.55656 1.6587 3.25331 1.07735 2.77879 0.655411C2.30427 0.233473 1.69145 0.000270459 1.05647 0L0.864539 0C0.635249 0 0.41535 0.0910852 0.253218 0.253218C0.0910852 0.41535 0 0.635249 0 0.86454C0 1.09383 0.0910852 1.31373 0.253218 1.47586C0.41535 1.63799 0.635249 1.72908 0.864539 1.72908H1.05647C1.26822 1.72911 1.4726 1.80685 1.63084 1.94756C1.78908 2.08827 1.89018 2.28217 1.91495 2.49247L3.10456 12.6076C3.22806 13.6595 3.73349 14.6295 4.52492 15.3335C5.31635 16.0374 6.33868 16.4263 7.39786 16.4263H16.4262C16.6555 16.4263 16.8754 16.3352 17.0376 16.173C17.1997 16.0109 17.2908 15.791 17.2908 15.5617C17.2908 15.3324 17.1997 15.1125 17.0376 14.9504C16.8754 14.7883 16.6555 14.6972 16.4262 14.6972H7.39786C6.86261 14.6958 6.34088 14.529 5.90424 14.2194C5.46759 13.9098 5.13741 13.4727 4.959 12.9681H15.2652C16.2787 12.9682 17.26 12.6121 18.0376 11.9621C18.8152 11.3122 19.3398 10.4097 19.5196 9.41224L19.7253 8.27191C19.2444 8.92392 18.6171 9.45386 17.8939 9.81906C17.1707 10.1843 16.3719 10.3745 15.5617 10.3745V10.3745Z"
										fill="#AEAEAE"
									/>
									<path
										d="M12.9683 6.05176H14.6974V7.78084C14.6974 8.01013 14.7885 8.23003 14.9506 8.39216C15.1127 8.5543 15.3326 8.64538 15.5619 8.64538C15.7912 8.64538 16.0111 8.5543 16.1732 8.39216C16.3354 8.23003 16.4265 8.01013 16.4265 7.78084V6.05176H18.1555C18.3848 6.05176 18.6047 5.96068 18.7669 5.79854C18.929 5.63641 19.0201 5.41651 19.0201 5.18722C19.0201 4.95793 18.929 4.73803 18.7669 4.5759C18.6047 4.41377 18.3848 4.32268 18.1555 4.32268H16.4265V2.5936C16.4265 2.36431 16.3354 2.14442 16.1732 1.98228C16.0111 1.82015 15.7912 1.72906 15.5619 1.72906C15.3326 1.72906 15.1127 1.82015 14.9506 1.98228C14.7885 2.14442 14.6974 2.36431 14.6974 2.5936V4.32268H12.9683C12.739 4.32268 12.5191 4.41377 12.357 4.5759C12.1948 4.73803 12.1038 4.95793 12.1038 5.18722C12.1038 5.41651 12.1948 5.63641 12.357 5.79854C12.5191 5.96068 12.739 6.05176 12.9683 6.05176V6.05176Z"
										fill="#AEAEAE"
									/>
								</svg>

								<span className="nav-text">Orders</span>
							</NavLink>
						</li>

						{/* <!-- Authentication --> */}
						{/* <!-- <li className="has-sub">
					<a className="sidenav-item-link" href="javascript:void(0)">
						<i className="mdi mdi-login"></i>
						<span className="nav-text">Authentication</span> <b className="caret"></b>
					</a>
					<div className="collapse">
						<ul className="sub-menu" id="authentication" data-parent="#sidebar-menu">
							<li className="">
								<a href="sign-in.html">
									<span className="nav-text">Sign In</span>
								</a>
							</li>
							<li className="">
								<a href="sign-up.html">
									<span className="nav-text">Sign Up</span>
								</a>
							</li>
						</ul>
					</div>
				</li> --> */}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AffiliatesSidebar;
