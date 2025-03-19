import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, get } from "firebase/database";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState('');
  const [password, setPassword] = useState('123456'); // Set initial password
  const [error, setError] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentsRef = ref(db, 'students');
    get(studentsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const studentsArray = Object.entries(snapshot.val()).map(([key, value]) => ({
            id: key,
            ...value,
            email: value.email, // Ensure email is included
            password: value.password // Ensure password is included
          }));
          setStudents(studentsArray);
        } else {
          setStudents([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setError(error.message);
      });
  }, []);

  const handleLogin = async () => {
    try {
      const student = students.find(s => s.id === selectedStudent);
      if (!student) {
        setError('Please select a student.');
        return;
      }

      await signInWithEmailAndPassword(auth, student.email, password);
      navigate(`/student-area/${selectedStudent}`);
    } catch (signInError) {
      setError(signInError.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Student Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <select
        value={selectedStudent}
        onChange={(e) => setSelectedStudent(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      >
        <option value="">Select Student</option>
        {students.map(student => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>

      <input
        type="password"
        placeholder="Password (123456)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Login
      </button>
    </div>
  );
};

export default StudentLogin;
