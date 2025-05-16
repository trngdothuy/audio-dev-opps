export const getCICDStatus = async (): Promise<any> => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("No token found");
        return;
    }
    // console.log(token)

    const res = await fetch('http://localhost:8000/api/ci-cd', {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    // console.log("res", res)
     
    if (!res.ok) {
        throw new Error("Failed to fetch services");
    }

    return res.json();
};