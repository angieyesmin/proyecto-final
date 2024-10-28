import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './Components/Home';
import Contacnos from './pages/Contacnos'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactanos" element={<Contacnos />} />
      </Routes>
    </Router>
  );
}

export default App;
