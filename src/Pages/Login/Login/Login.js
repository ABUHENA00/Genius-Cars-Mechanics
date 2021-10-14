import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} =useAuth();
    return (
        <div>
            <h1>Please LogIn</h1>
            <button onClick={signInUsingGoogle} className="btn btn-primary">SignIn With Google</button>
        </div>
    );
};

export default Login;