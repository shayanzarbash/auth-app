import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {

  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log("logout")
    } catch (e) {
      console.log(e.massage)
    }
  }

  return (
    <div className='max-w-[600px] max-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-2'>داشبورد</h1>
      <p>ایمیل شما :{user && user.email}</p>
      <button onClick={handleLogout} className="bg-red-500 w-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Logout</button>
    </div>
  )
}


export default Account;