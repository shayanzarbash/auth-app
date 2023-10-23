import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Forms from './Forms.tsx';

const Account = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="#pablo"
                >
                  Dashboard
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="###"
                    >
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={handleLogout}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-red-600 hover:opacity-75"
                      href="###"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <h3 className='mt-8'>ایمیل شما :{user && user.email}</h3>
        <Forms />
      </div>
    </div>
  )
}

export default Account;