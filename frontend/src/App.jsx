import { useEffect, useState } from "react";
import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Loading from "./components/Loading";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    setLoading(true);
    const res = await getStudents();
    setStudents(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addOrUpdateStudent = async (student) => {
    if (editingStudent) {
      await updateStudent(editingStudent.id, student);
      alert("Student Updated Successfully");
      setEditingStudent(null);
    } else {
       try {
  const res = await addStudent(student);
  console.log(res.data);
  alert("Student Registered Successfully");
} catch (error) {
  console.error(error);
  alert(error.response?.data?.message || error.message);
}try {
  const res = await addStudent(student);
  console.log(res.data);
  alert("Student Registered Successfully");
} catch (error) {
  console.error(error);
  alert(error.response?.data?.message || error.message);
}
    }

    fetchStudents();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this student?")) {
      await deleteStudent(id);
      alert("Student Deleted Successfully");
      fetchStudents();
    }
  };

  return (
    <div className="container">
      <h1>Student Registration System</h1>

      <StudentForm
        addOrUpdateStudent={addOrUpdateStudent}
        editingStudent={editingStudent}
      />

      {loading ? (
        <Loading />
      ) : (
        <StudentTable
          students={students}
          onEdit={setEditingStudent}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;