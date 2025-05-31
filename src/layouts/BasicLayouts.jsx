import { Link, Outlet } from 'react-router';
import { FcNook } from 'react-icons/fc';

function BasicLayouts() {
	return (
		<>
			<header className="fixed w-screen z-20 bg-white text-black py-4 shadow-lg flex flex-col sm:flex-row items-center justify-between px-6">
				<div className="text-2xl font-semibold flex items-center gap-2">
					<span role="img" aria-label="notes">
						<Link to={'/home'}>
							<FcNook />
						</Link>
					</span>{' '}
					notes
				</div>
				<div className="mt-3 sm:mt-0 flex gap-3">
					<div className="bg-white border-2 text-black px-4 py-2 rounded shadow cursor-pointer">
						<Link to={'/login'}>sign-in</Link>
					</div>
					<div className="bg-black text-white px-4 py-2 rounded shadow cursor-pointer">
						<Link to={'/sign-up'}>sign-up</Link>
					</div>
				</div>
			</header>
			<main className="h-screen bg-white">
				<Outlet />
			</main>
			<footer className="fixed z-30 w-screen bottom-0 bg-white text-gray-600 py-4 text-center mt-8 border-t shadow">
				© {new Date().getFullYear()} Notes App. All rights reserved.
			</footer>
		</>
	);
}

export default BasicLayouts;
