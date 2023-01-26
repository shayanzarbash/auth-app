import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.jsx';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();
  const { signin } = UserAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    if(email.length === 0){
      alert('ایمیل وارد شود');
        } else if(password.length === 0){
      alert('رمز وارد شود');
    } else {
      await signin(email, password);
      navigate('/account');
    }  
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="w-1/2 h-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col">
        <h2 className="text-center font-medium text-2xl mb-4">
          ورود
        </h2>
        <div className="flex flex-1 flex-col justify-evenly">
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="password"
            placeholder="*******" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="
            flex justify-center
            p-2 rounded-md w-1/2 self-center
            bg-gray-800  text-white hover:bg-gray-800"
            onClick={handleSubmit}
          >
             {
              isLoading ?
                <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
            }  
            <span>
            ورود
            </span>
          </button>
        </div>
        <div className="text-center text-sm">
          عضو نیستید ؟
          <Link to="/signup">
            <span className="font-medium text-gray-800 ml-1">
              ثبت نام
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Signin;