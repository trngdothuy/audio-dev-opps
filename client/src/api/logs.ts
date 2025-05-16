export const fetchLogsForService = async (serviceName: string): Promise<any> => {
    // simulate delay
    await new Promise((res) => setTimeout(res, 500));

    const token = localStorage.getItem('token');

    const res = await fetch(`http://localhost:8000/api/logs/${serviceName}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch logs")
    }

    return res.json();
};