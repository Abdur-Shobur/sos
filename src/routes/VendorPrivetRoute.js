import React from 'react';
import { useAuthUser } from 'react-auth-kit';
import { Navigate, useLocation } from 'react-router-dom';
function VendorPrivetRoute({ children }) {
	const location = useLocation();
	const auth = useAuthUser();
	const user = auth();

	if (user?.role === 'vendor') {
		return children;
	}
	return <Navigate to="/vendors/sign-in" state={{ from: location }} replace />;
}

export default VendorPrivetRoute;
