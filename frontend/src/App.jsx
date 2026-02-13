import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CandidateProfile from './pages/CandidateProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* The default route "/" loads the Login page */}
        <Route path="/" element={<Login />} />

        {/* "/dashboard" loads the HR list view */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* "/candidate/:id" passes a dynamic ID to the profile page */}
        <Route path="/candidate/:id" element={<CandidateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;