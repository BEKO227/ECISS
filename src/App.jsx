import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import CustomHeader from './components/CustomHeader'; // Adjust path as needed
import ServicesScreen from './screens/ServiceScreen';
import './index.css'; // make sure it's imported

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <CustomHeader />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/services" element={<ServicesScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
