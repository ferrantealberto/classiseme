import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { ref, onValue } from "firebase/database";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const classesRef = ref(db, 'classes');
    onValue(classesRef, (snapshot) => {
      if (snapshot.exists()) {
        // Convert the object to an array
        const classesArray = Object.entries(snapshot.val()).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setClasses(classesArray);
      } else {
        setClasses([]);
      }
    });

    const studentsRef = ref(db, 'students');
    onValue(studentsRef, (snapshot) => {
      if (snapshot.exists()) {
        // Convert the object to an array
        const studentsArray = Object.entries(snapshot.val()).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setStudents(studentsArray);
      } else {
        setStudents([]);
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Admin Panel</h2>
      <p className="text-lg text-gray-700 mb-8">Manage students and application settings.</p>

      {/* Class List */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Class List</h3>
      {classes.length > 0 ? (
        <ul className="list-disc pl-5">
          {classes.map(cls => (
            <li key={cls.id} className="text-gray-700">
              {cls.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No classes found.</p>
      )}

      {/* Student List */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student List</h3>
      {students.length > 0 ? (
        <ul className="list-disc pl-5">
          {students.map(student => (
            <li key={student.id} className="text-gray-700">
              {student.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No students found.</p>
      )}

      {/* Debug Lists */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Debug Lists</h3>
      <div>
        <p>Students: {JSON.stringify(students)}</p>
        <p>Classes: {JSON.stringify(classes)}</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminPanel;
