import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import EnvironmentalAppSections from './pages/Home';
import RwandaMap from './pages/CollectionPoints';

const App = () => {
  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<EnvironmentalAppSections />} />
        <Route path="/collection-points" element={<RwandaMap />} />
      </Routes>
    </>
  );
};

export default App;
