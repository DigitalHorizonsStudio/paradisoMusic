import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import ServiceComponent from './components/ServiceComponent';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { ServicesPage } from './components/ServicesPage';
import { Events } from './components/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services/:title" element={
        <ServiceComponent />
        } />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
