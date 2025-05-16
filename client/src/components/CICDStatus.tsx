import { useEffect, useState } from 'react';
import { getCICDStatus } from '../api/cicd';

const CICDStatus = () => {
    type CICDStatus = {
        service: string;
        status: string;
        branch: string;
        lastDeployed: string;
    }

    const [statuses, setStatuses] = useState<CICDStatus[]>([]);

    useEffect(() => {
        getCICDStatus().then(setStatuses);
    }, []);

    return (
        <div className="bg-gray-800 p-6 mt-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">CI/CD Status</h3>
            <ul className='space-y-2'>
                {statuses.map((status, index) => (
                    <li key={index} className="text-gray-300">
                        <div>
                            <p className="font-semibold">{status.service}</p>
                            <p className="text-ts text-gray-400">Branch: {status.branch}</p>
                            <p className="text-ts text-gray-400">
                                Deployed at {status.lastDeployed}
                            </p>
                        </div>
                        <div 
                            className={`px-3 py-1 rounded text-sm font-bold ${
                                status.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}    
                        >
                            {status.status}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CICDStatus;