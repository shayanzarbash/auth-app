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
    <div className='h-screen'>
      <div className='navbar h-20 bg-gray-900 flex justify-between align-center items-center pl-3 pr-3'>
      <button onClick={handleLogout} className="bg-red-500 w-200 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">Logout</button>
        <div className='text-white'>داشبورد</div>
      </div>
      <p className='mt-8'>ایمیل شما :{user && user.email}</p>
    </div>
  )
}

export default Account;