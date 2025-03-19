import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, onValue } from "firebase/database";
import { db } from '../firebase';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    const classesRef = ref(db, 'classes');
    onValue(classesRef, (snapshot) => {
      if (snapshot.exists()) {
        const classesArray = Object.entries(snapshot.val()).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setClasses(classesArray);
      } else {
        setClasses([]);
      }
    });
  }, []);

  const handleAdminLogin = async () => {
    const adminEmail = prompt('Enter admin email:');
    const adminPassword = prompt('Enter admin password:');

    if (adminEmail && adminPassword) {
      try {
        await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
        navigate('/admin');
      } catch (signInError) {
        if (signInError.code === 'auth/user-not-found') {
          try {
            await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
            navigate('/admin');
          } catch (createError) {
            alert(`Error creating admin user: ${createError.message}`);
          }
        } else {
          alert(`Error signing in: ${signInError.message}`);
        }
      }
    }
  };

  const handleStudentLogin = () => {
    navigate('/student-login');
  };

  return (
    
      
        <h1>Welcome to Student Management App</h1>
      
      
        <div>
          <label htmlFor="classSelect">Select Class:</label>
          <select id="classSelect">
            {classes.map(cls => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
      

      
        Admin Login
      
      
        Student Login
      
    
  );
};

export default WelcomeScreen;
