import './App.css';
import './styles/main.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin.tsx';
import Signup from './components/Signup.tsx';
import Account from './components/Account.tsx';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div className="text-center text-3xl font-bold">
      <h1>Application</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
