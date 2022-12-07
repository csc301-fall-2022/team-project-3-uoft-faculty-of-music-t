import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//TODO: import axios from ...

const Login = () => {
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //TODO: Axio, backend api handling superuser
        // If success:
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <div>
                    <h1>You are logged in!</h1>
                    <h2>
                        <Link to="/admin">Go to the admin page</Link>
                    </h2>
                </div>
            ) : (
        <div>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input
                    className="login-input"
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor='password'>Password:</label>
                <input
                    className="login-input"
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button className='login-button'>Login</button>
            </form>
        </div>
            )}
            </>
    )
}

export default Login