import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import ServiceComponent from './components/ServiceComponent';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services/:title" element={
        <ServiceComponent />
        } />
      <Route path="/contactus" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;
