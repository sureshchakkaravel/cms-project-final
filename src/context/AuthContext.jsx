import { createContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import userService from '../service/userService';
import { useNavigate } from 'react-router';

const AuthContext = createContext();
function AuthProvider({ children }) {
	const [userEmail, setUserEmail] = useState(null);
	const [isAuth, setIsAuth] = useState(false);
	const navigate = useNavigate();

	function login(email, password) {
		try {
			userService.authenticate(email, password);
			setIsAuth(true);
			setUserEmail(email);
			// Add login action to history
			import('../service/historyService').then(({ default: historyService }) => {
				historyService.addHistory(email, 'login');
			});
			navigate('/dashboard/intro');
			Swal.fire({
				title: 'Success',
				text: 'Login is successful',
				icon: 'success',
			});
		} catch (error) {
			Swal.fire({
				title: 'Invalid',
				text: error.message,
				icon: 'error',
			});
		}
	}
	function logout() {
		setIsAuth(false);
		setUserEmail(null);
		Swal.fire({
			title: 'Success',
			text: 'Logout successful',
			icon: 'success',
		});
	}
	function register(email, password) {
		try {
			userService.addUser(email, password);
			setIsAuth(true);
			navigate('/dashboard/intro');
			Swal.fire({
				title: 'Success',
				text: 'Registration is successful',
				icon: 'success',
			});
		} catch (error) {
			Swal.fire({
				title: 'Invalid',
				text: error.message,
				icon: 'error',
			});
		}
	}
	return (
		<AuthContext.Provider value={{ login, logout, register, isAuth, userEmail }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider };
export default AuthContext;
