import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser } = UserAuth();
const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.massage);
      console.log(e.massage);
    }
  }


  return (
    <div className='max-w-[700px] max-auto m-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>sign in your account</h1>
        <p className='py-2 font-normal'>
          dont have account yet ?
          <Link className='underline' to='/'>sign in</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium text-left'>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} className='border p-3' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium text-left'>password</label>
          <input type='password' onChange={(e) => setPassword(e.target.value)} className='border p-3' />
        </div>
        <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">sign up</button>
      </form>
    </div>
  )
}

export default Signup;