import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      alert('signup');
      navigate('/signin');
    } catch (e) {
      setError(e.massage);
      console.log(e.massage);
    }
  }


  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="w-1/2 h-3/4 shadow-lg rounded-md bg-white p-8 flex flex-col">
        <h2 className="text-center font-medium text-2xl mb-4">
          ثبت نام
        </h2>
        <div className="flex flex-1 flex-col justify-evenly">
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="نام"
            value={firstname}
            onChange={(e) => { setFirstname(e.target.value); }}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="نام خانوادگی"
            value={lastname}
            onChange={(e) => { setLastname(e.target.value); }}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="رمز عبور"
            placeholder="*******" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="
             flex justify-center
             p-2 rounded-md w-1/2 self-center
             bg-gray-800  text-white 
             hover:bg-gray-700"
            onClick={handleSubmit}
          >
             {
              isLoading ?
                <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
            }            
            <span>
            ثبت نام
            </span>
          </button>
        </div>
        <div className="text-center text-sm">
          ?
          <Link to="/signin">
            <span className="font-medium text-gray-800 ml-1">
              ورود
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup;