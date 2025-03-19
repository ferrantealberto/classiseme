import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import AdminPanel from './components/AdminPanel';
import StudentLogin from './components/StudentLogin';
import StudentArea from './components/StudentArea';
import { auth } from './firebase';

function App() {
  const [isWizardCompleted, setIsWizardCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <AppContent isWizardCompleted={isWizardCompleted} />
    </Router>
  );
}

function AppContent({ isWizardCompleted }: { isWizardCompleted: boolean }) {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student-area/:studentId" element={<StudentArea />} />
    </Routes>
  );
}

export default App;
