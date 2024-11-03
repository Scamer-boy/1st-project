import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard'; // Corrected path and filename
import Home from './pages/Notes'; // Check if this path is correct
import Student from './add notes/Add Notes'; // Removed space and corrected file naming

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}
export default App;
