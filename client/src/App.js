import { Route , Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import UpdatePassword from './components/UpdatePassword';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/home/updatePassword' element={<UpdatePassword />} />
			</Routes>

		</div>
	);
}

export default App;
