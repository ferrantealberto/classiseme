import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { auth, db } from '../firebase';
import { ref, onValue, update } from "firebase/database";
import { updatePassword } from "firebase/auth";

const StudentArea = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [studentClasses, setStudentClasses] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isInitialPassword, setIsInitialPassword] = useState(false);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (studentId) {
      const studentRef = ref(db, `students/${studentId}`);
      onValue(studentRef, (snapshot) => {
        const studentData = snapshot.val();
        if (studentData) {
          setStudent(studentData);
          setStudentName(studentData.name);
          const classId = studentData.class;

          // Fetch class details
          const classRef = ref(db, `classes/${classId}`);
          onValue(classRef, (classSnapshot) => {
            const classData = classSnapshot.val();
            if (classData) {
              setStudentClasses([classData]);
            } else {
              setStudentClasses([]);
            }
          });

          // Check if the student is using the initial password
          if (studentData.password === '123456') {
            setIsInitialPassword(true);
            setShowPasswordForm(true); // Directly show the password form
          }
        } else {
          setStudentClasses([]);
        }
      });
    } else {
      navigate('/student-login');
    }
  }, [studentId, navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!newPassword) {
      setError('Please enter a new password.');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const user = auth.currentUser;

    if (user) {
      try {
        await updatePassword(user, newPassword);

        // Update the password in the database
        const studentRef = ref(db, `students/${studentId}`);
        await update(studentRef, { password: newPassword });

        setSuccessMessage('Password changed successfully!');
        setShowPasswordForm(false);
        setIsInitialPassword(false);
      } catch (updateError) {
        setError(updateError.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Student Area</h2>
      <p className="text-lg text-gray-700 mb-8">Welcome, {studentName}!</p>

      {/* Class List */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Classes</h3>
      {studentClasses.length > 0 ? (
        <ul className="list-disc pl-5">
          {studentClasses.map(cls => (
            <li key={cls.id} className="text-gray-700">
              {cls.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No classes found.</p>
      )}

      {/* Change Password Form */}
      {showPasswordForm && (
        <form onSubmit={handleChangePassword} className="mb-8">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Change Password
          </button>
        </form>
      )}

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
};

export default StudentArea;
