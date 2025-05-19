import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new URLSearchParams();
            formData.append("username", username);
            formData.append("password", password);

            const res = await fetch("http://52.47.113.237:8000/auth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData,
            });

            console.log(res)

            const data = await res.json();

            console.log(data);

            if (res.ok) {
                localStorage.setItem("token", data.access_token);
                navigate("/dashboard");
            } else {
                alert(`Login failed: ${data.detail}`);
            }
        } catch (err) {
            console.error(err);
                alert("Error connecting to server");
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow w-80">
                <h2 className="text-2xl mb-4 font-bold text-center">DevOps Login</h2>
                <input
                    className='w-full p-2 mb-3 rounded bg-gray-700'
                    type="username"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className='2-full p-2 mb-4 rounded bg-gray-700'
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className='w-full bg-blue-500 hover:bg-blue-600 p-2 rounded font-bold'
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;