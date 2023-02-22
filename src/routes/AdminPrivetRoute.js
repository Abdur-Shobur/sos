import React, { useEffect, useState } from 'react';
import { useAuthUser } from 'react-auth-kit';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { useIsAuthenticated } from 'react-auth-kit';

function AdminPrivetRoute({ children }) {
	const [user, setUser] = useState(null);
	const [checkAuth, setChaeckUser] = useState(null);
	const location = useLocation();
	const auth = useAuthUser();
	// const user = auth();
	console.log(useIsAuthenticated());
	const userAUTH = auth();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BASE_URL}/checkingAuthenticated`)
			.then((data) => data.json())
			.then((res) => console.log(res));
	}, [auth]);
	useEffect(() => {
		if (auth) {
			setUser(userAUTH);
		}
	}, [auth, userAUTH]);
	console.log(user);
	if (!user && user !== null) {
		return <h1>Loading</h1>;
	}
	if (user?.role === 'admin') {
		return children;
	}
	return <Navigate to="/sign-in" state={{ from: location }} replace />;
}

export default AdminPrivetRoute;
