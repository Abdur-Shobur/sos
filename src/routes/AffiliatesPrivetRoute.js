import React from 'react';
import { useAuthUser } from 'react-auth-kit';
import { Navigate, useLocation } from 'react-router-dom';
function AffiliatesPrivetRoute({ children }) {
	const location = useLocation();
	const auth = useAuthUser();
	const user = auth();

	if (user?.role === 'affiliator') {
		return children;
	}
	return (
		<Navigate to="/affiliates/sign-in" state={{ from: location }} replace />
	);
}

export default AffiliatesPrivetRoute;
