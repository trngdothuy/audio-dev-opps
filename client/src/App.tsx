import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LogViewer from './components/LogViewer';
import CICDStatus from './components/CICDStatus';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
      <div className="flex">
        <Sidebar/>
        <main className='flex-1 bg-gray-100 min-h-screen p-6'>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/logs/:service" element={<LogViewer/>} />
            <Route path="/cicd-status" element={
              <ProtectedRoute>
                <CICDStatus />
              </ProtectedRoute>
              } />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
