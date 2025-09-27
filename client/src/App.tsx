import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import RoleSelection from './components/RoleSelection';

const App = () => {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage setRole={setRole} />} />
        <Route path="/dashboard" element={<Dashboard role={role} />} />
        <Route path="/select-role" element={<RoleSelection setRole={setRole} />} />
      </Routes>
    </Router>
  );
};

export default App;