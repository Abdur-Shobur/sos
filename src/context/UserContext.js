import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const USE_USER = createContext();

function UserContext({ children }) {
	// get user
	const [user, setUser] = useState(null);

	// log out user
	const log_out_user = () => {
		localStorage.removeItem('token');
		return setUser(null);
	};

	useEffect(() => {}, []);
	const value = {
		user,
		setUser,
		log_out_user,
	};
	return <USE_USER.Provider value={value}>{children}</USE_USER.Provider>;
}

export default UserContext;

// message:"Logged In Successfully"
// status:200
// token:"5|zMd6xwNlJ9Nsm5FoMENUuCIOIxnRdtIilv3tcgJw"
// username:"Admin"
