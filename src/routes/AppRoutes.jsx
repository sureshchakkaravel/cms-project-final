import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import BasicLayouts from '../layouts/BasicLayouts';
import DashboardLayouts from '../layouts/DashboardLayouts';
import Intro from '../pages/dashboard/Intro';
import PrivateRoute from './PrivateRoute';
import UserStats from '../pages/dashboard/UserStats';
import AddNewItem from '../pages/dashboard/AddNewItem';
import DisplayAll from '../pages/dashboard/DisplayAll';
import MyFavorites from '../pages/dashboard/MyFavorites';
import MyItems from '../pages/dashboard/MyItems';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<BasicLayouts />}>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Route>
			<Route
				path="/dashboard"
				element={
					<PrivateRoute>
						<DashboardLayouts />
					</PrivateRoute>
				}
			>
				<Route path="/dashboard/intro" element={<Intro />} />
				<Route path="/dashboard/user-stats" element={<UserStats />} />
				<Route path="/dashboard/add" element={<AddNewItem />} />
				<Route path="/dashboard/display" element={<DisplayAll />} />
				<Route path="/dashboard/favorites" element={<MyFavorites />} />
				<Route path="/dashboard/my-content" element={<MyItems />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
