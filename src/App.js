import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';

import route from './routes/routes';
import './assets/css/ekka.css';
import './assets/css/extra-css.css';
import UserContext from './context/UserContext';

axios.defaults.baseURL = 'https://sos.futureinltd.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<AuthProvider authType={'cookie'} authName={'_auth'}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={route} />;
				</QueryClientProvider>
			</AuthProvider>
		</>
	);
}

export default App;
