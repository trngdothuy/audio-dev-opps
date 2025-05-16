import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchLogsForService } from '../api/logs';

const LogViewer = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const {service} = useParams();

    useEffect(() => {
        if (!service) return;

        const fetchLogs = async () => {
            setLoading(true);
            const result = await fetchLogsForService(service);
            setLogs(result);
            setLoading(false);
        };

        fetchLogs();
    }, [service]);

    return (
        <div className="bg-gray-800 p-6 mt-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Logs for {service}</h3>
            {loading ? (
                <p className="text-gray-400">Loading logs...</p>
            ) : (
                <ul className="text-sm space-y-1">
                {logs.map((log, index) => (
                    <li key={index} className="text-gray-300">[{service}]-{log}</li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default LogViewer;