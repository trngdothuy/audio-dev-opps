import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Sidebar = () => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('token', token);
    }, []);
    

    return (
        <div className="w-64 min-h-screen bg-gray-900 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-8">DevOps Dashboard</h2>
            <NavLink
                to="/dashboard"
                className={({ isActive }) => `mb-4 block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700 font-semibold' : ''}`}
            >
                Dashboard
            </NavLink>

            {/* <NavLink
                to="/logs"
                className={({ isActive }) => `mb-4 block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700 font-semibold' : ''}`}
            >
                Logs
            </NavLink> */}

            <NavLink
                to="/cicd-status"
                className={({ isActive }) => `mb-4 block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700 font-semibold' : ''}`}
            >
                CI/CD Status
            </NavLink>

        </div>
    );
};

export default Sidebar;