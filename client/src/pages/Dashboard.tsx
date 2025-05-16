import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {fetchServices} from '../api/services';

function Dashboard() {
    type Services = {
        id: number;
        name: string;
        status: 'up' | 'down';
        cpu: number;
        memory: number;
    }

    const [services, setServices] = useState<Services[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchServices();
                setServices(data);
            } catch (err) {
                console.error("Error fetching services:", err);
            }
        };

        loadData();
      }, []);



    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const restartService = (serviceId: number) => {
        alert(`Restarting service ${serviceId}`);
        setServices(services.map(service => 
            service.id === serviceId ? {...service, status: 'up', cpu: 10, memory: 100} : service
        ));
    };

    const viewLog = (name: string) => {
        console.log(name)
        // setSelectedService(name);
        // console.log(selectedService);
        navigate(`/logs/${name}`);
    };

    if (!localStorage.getItem('token')) {
        navigate('/login'); // reditect to login page if no token
    }

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       // Simulate updating the services' CPU and memory usage
    //       setServices((prevServices) =>
    //         prevServices.map((service) => ({
    //           ...service,
    //           cpu: service.status === 'up' ? service.cpu + Math.floor(Math.random() * 5) : 0,
    //           memory: service.status === 'up' ? service.memory + Math.floor(Math.random() * 10) : 0,
    //         }))
    //       );
    //     }, 5000); // Update every 5 seconds
    
    //     return () => clearInterval(intervalId); // Clear the interval on component unmount
    //   }, []);

    return (
        <div className="p-8 text-white bg-gray-900 min-h-screen">
            {/* <div className="flex justify-between items-center mb-6"> */}
                <h1 className="text-3xl font-bold mb-4">DevOps Dashboard</h1>
                <button 
                    onClick={handleLogout} 
                    className='bg-blue-500 hover:bg-blue-600 text-white-500 px-4 py-2 font-semibold rounded'
                >
                    Logout
                </button>
            {/* </div> */}
          
            
            <p className='text-sm text-gray-400'>Last updated: {new Date().toLocaleString()}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
                {services.map((service) => (
                    <div 
                        key={service.id}
                        className={`p-4 rounded-lg shadow ${
                            service.status === 'up' ? 'bg-green-700' : 'bg-red-700'
                        }`}
                    >
                        <h2 className="text-xl font-semibold">{service.name}</h2>
                        <p>Status: <span className="font-bold">{service.status}</span></p>
                        <p>CPU: {service.cpu}%</p>
                        <p>Memory: {service.memory} MB</p>
                        <button
                            onClick={() => restartService(service.id)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded mt-4"
                        >
                            Restart
                        </button>
                        <button
                            key={service.name}
                            onClick={() => viewLog(service.name)}
                            className={"text-white py-1 px-4 rounded mt-4 bg-gray-500 hover:bg-gray-600"}
                        >
                            View Log
                        </button>
                    </div>
                ))}
                {/* Pass selected service into LogViewer */}
                {/* <LogViewer service={selectedService} /> */}
            </div>
        </div>
    );
}

export default Dashboard;