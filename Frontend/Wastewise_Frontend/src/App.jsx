import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import EnvironmentalAppSections from './pages/Home';
import RwandaMap from './pages/CollectionPoints';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<EnvironmentalAppSections />} />
        <Route path="/collection-points" element={<RwandaMap />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
