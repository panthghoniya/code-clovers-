import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatedThemeToggler } from './components/AnimatedThemeToggler';
import ExecutiveProfile from './components/ExecutiveProfile';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary/20 selection:text-foreground">
      <AnimatedThemeToggler />
      
      <Routes>
        {/* Default route redirects to Sivangi */}
        <Route path="/" element={<Navigate to="/sivangi" replace />} />
        
        {/* Dynamic Route for each sales executive */}
        <Route path="/:name" element={<ExecutiveProfile />} />
      </Routes>
    </div>
  );
}

export default App;
