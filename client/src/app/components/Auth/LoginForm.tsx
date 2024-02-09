import React, { useState } from 'react';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('password:', password);                                                            
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                    />
                 </div>
                 <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;