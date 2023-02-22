import AdminDashboard from '../pages/admin-dashboard/AdminDashboard';
import Affiliates from '../pages/affiliates/Affiliates';
import MainCategory from '../pages/category/MainCategory';
import SubCategory from '../pages/category/SubCategory';
import OrdersHistory from '../pages/orders/OrdersHistory';
import ProductAdd from '../pages/porducts/ProductAdd';
import ProductList from '../pages/porducts/ProductList';
import Reviews from '../pages/reviews/Reviews';
import SignIn from '../pages/sign-in/SignIn';
import SignUp from '../pages/sign-in/SignUp';
import Transitions from '../pages/transitions/Transitions';
import Vendors from '../pages/Vendors/Vendors';
import VendorsSignUp from '../pages/Vendors/VendorsSignUp';
import VendorsSignIn from '../pages/Vendors/VendorsSignIn';
import AffiliatesSignIn from '../pages/affiliates/AffiliatesSignIn';
import AffiliatesSignUp from '../pages/affiliates/AffiliatesSignUp';
import VendorLayout from '../layouts/VendorLayout';
import VendorsDashboard from '../pages/Vendors/VendorsDashboard';
import AffiliatesLayout from '../layouts/AffiliatesLayout';
import AffiliatesDashboard from '../pages/affiliates/AffiliatesDashboard';
import AdminPrivetRoute from './AdminPrivetRoute';
import VendorPrivetRoute from './VendorPrivetRoute';
import AffiliatesPrivetRoute from './AffiliatesPrivetRoute';
import { RequireAuth } from 'react-auth-kit';

const { createBrowserRouter } = require('react-router-dom');
const { default: MainLayout } = require('../layouts/MainLayout');
const route = createBrowserRouter([
	// admin  sing in sing up
	{
		path: '/',
		element: (
			<RequireAuth loginPath="/sign-in">
				<MainLayout></MainLayout>
			</RequireAuth>
			// <AdminPrivetRoute></AdminPrivetRoute>
		),
		children: [
			{
				path: '/admin-dashboard',
				element: <AdminDashboard />,
			},
			{
				path: '/vendors',
				element: <Vendors />,
			},
			{
				path: '/affiliates',
				element: <Affiliates />,
			},
			{
				path: '/main-category',
				element: <MainCategory />,
			},
			{
				path: '/sub-category',
				element: <SubCategory />,
			},
			{
				path: '/product-add',
				element: <ProductAdd />,
			},
			{
				path: '/product-list',
				element: <ProductList />,
			},
			{
				path: '/orders-history',
				element: <OrdersHistory />,
			},
			{
				path: '/review-list',
				element: <Reviews />,
			},
			{
				path: '/brand-list',
				element: <Transitions />,
			},
		],
	},

	// admin  sing in sing up
	{
		path: '/sign-in',
		element: <SignIn />,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
	},

	// vendor routes

	{
		path: '/vendors-dashboard',
		element: (
			<VendorPrivetRoute>
				<VendorLayout />
			</VendorPrivetRoute>
		),
		children: [
			{
				path: '/vendors-dashboard',
				element: <VendorsDashboard />,
			},
			{
				path: '/vendors-dashboard/product-add',
				element: <ProductAdd />,
			},
			{
				path: '/vendors-dashboard/product-list',
				element: <ProductList />,
			},
			{
				path: '/vendors-dashboard/orders-history',
				element: <OrdersHistory />,
			},
		],
	},

	// vendor sing in sing up
	{
		path: '/vendors/sign-in',
		element: <VendorsSignIn />,
	},
	{
		path: '/vendors/sign-up',
		element: <VendorsSignUp />,
	},

	// affiliates layout
	{
		path: '/affiliates-dashboard',
		element: (
			<AffiliatesPrivetRoute>
				<AffiliatesLayout />
			</AffiliatesPrivetRoute>
		),
		children: [
			{
				path: '/affiliates-dashboard',
				element: <AffiliatesDashboard />,
			},
			{
				path: '/affiliates-dashboard/product-add',
				element: <ProductAdd />,
			},
			{
				path: '/affiliates-dashboard/product-list',
				element: <ProductList />,
			},
			{
				path: '/affiliates-dashboard/orders-history',
				element: <OrdersHistory />,
			},
		],
	},

	// affiliates sing in sing up
	{
		path: '/affiliates/sign-in',
		element: <AffiliatesSignIn />,
	},
	{
		path: '/affiliates/sign-up',
		element: <AffiliatesSignUp />,
	},
]);

export default route;
