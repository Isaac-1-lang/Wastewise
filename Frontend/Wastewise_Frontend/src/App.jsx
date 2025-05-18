import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import EnvironmentalAppSections from './pages/Home';
import RwandaWasteCollectionPoints from './pages/CollectionPoints';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EnvironmentalAppSections />} />
        <Route path="/collection-points" element={<RwandaWasteCollectionPoints />} />
      </Routes>
    </Router>
  );
};

export default App;
