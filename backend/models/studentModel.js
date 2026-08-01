const db = require("../config/db");

// Get all students
const getAllStudents = (callback) => {
  db.query("SELECT * FROM students", callback);
};

// Get student by ID
const getStudentById = (id, callback) => {
  db.query("SELECT * FROM students WHERE id = ?", [id], callback);
};

// Add student
const addStudent = (student, callback) => {
  const sql =
    "INSERT INTO students (full_name, email, phone, course, year_level) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [
      student.full_name,
      student.email,
      student.phone,
      student.course,
      student.year_level,
    ],
    callback
  );
};

// Update student
const updateStudent = (id, student, callback) => {
  const sql =
    "UPDATE students SET full_name=?, email=?, phone=?, course=?, year_level=? WHERE id=?";

  db.query(
    sql,
    [
      student.full_name,
      student.email,
      student.phone,
      student.course,
      student.year_level,
      id,
    ],
    callback
  );
};

// Delete student
const deleteStudent = (id, callback) => {
  db.query("DELETE FROM students WHERE id = ?", [id], callback);
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};