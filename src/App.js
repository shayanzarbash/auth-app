import './styles/main.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin.tsx';
import Signup from './components/Signup.tsx';
import Account from './components/Account.tsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

function App() {
  return (
    <div className="text-center text-3xl font-bold">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
