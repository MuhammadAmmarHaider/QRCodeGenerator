import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import apple from '../Assets/apple.png';
import facebook from '../Assets/facebook.png';
import google from '../Assets/google.png';
import email from '../Assets/email.png';

function Login({ children }) {
    return (
        <div className="login-container flex items-center justify-center min-h-screen bg-[#1E1F36]">
            {children}
        </div>
    );
}

function OptionButton({ logo, text }) {
    return (
        <button className="button flex items-center space-x-2 w-full">
            <img src={logo} alt={text} className="logo w-6 h-6" />
            <span className="text-[#E0E0E0]">{text}</span>
        </button>
    );
}

function LoginForm({setIsLogedIn}) {
    const [phoneOrEmail, setPhoneOrEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        const storedData = JSON.parse(localStorage.getItem('userData'));

        if (storedData) {
            if (storedData.phoneOrEmail === phoneOrEmail && storedData.password === password) {
                alert('Login successful!');
                navigate('/');
            } else {
                setError('Invalid phone/email or password');
            }
        } else {
            setError('No user data found. Please sign up first.');
        }
        setIsLogedIn(true);
    };

    return (
        <div className="login-form bg-[#23243C] p-8 rounded-lg shadow-lg w-96 md:w-[500px]">
            <div className="header text-center mb-4">
                <h1 className="text-2xl text-[#E0E0E0]">Login</h1>
            </div>
            <hr />
            <div className='fields mb-4'>
                <input 
                    type="text" 
                    placeholder="Phone Number or Email Address" 
                    className="w-full p-2 rounded border border-gray-600 bg-[#2D2E49] text-[#E0E0E0]" 
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                />
                <br />
                <input 
                    type="password" 
                    placeholder='Password' 
                    className="w-full p-2 rounded border border-gray-600 bg-[#2D2E49] text-[#E0E0E0] mt-2" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="center-container mb-4">
            <button 
                    id="continue" 
                    className="center-button bg-[#9F7AEA] text-white py-2 rounded w-full"
                    onClick={handleLogin}
                >
                    Continue
                </button>
            </div>
            <div className="line-container mb-4 flex items-center justify-center">
                <hr className="line flex-grow border-gray-600" />
                <span className="mx-2 text-[#A3A3A3]">or</span>
                <hr className="line flex-grow border-gray-600" />
            </div>
            <div className='buttonGrid grid grid-cols-2 gap-2'>
                <OptionButton logo={email} text="Login with Email" />
                <OptionButton logo={google} text="Login with Google" />
                <OptionButton logo={facebook} text="Login with Facebook" />
                <OptionButton logo={apple} text="Login with Apple" />
            </div>
            <p className='footer text-[#A3A3A3] mt-4 text-center'>Already have an account? <b><u>Login</u></b></p>
        </div>
    );
}

export default function LoginPage({setIsLogedIn}) {
    return (
        <Login>
            <LoginForm setIsLogedIn={setIsLogedIn} />
        </Login>
    );
}
