import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin.tsx';
import Signup from './components/Signup.tsx';
import Account from './components/Account.tsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import './styles/main.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Application App</h1>
    </div>
  );
}

export default App;
