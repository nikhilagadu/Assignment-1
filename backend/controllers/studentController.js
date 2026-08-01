const Student = require("../models/studentModel");

// Get all students
exports.getStudents = (req, res) => {
  Student.getAllStudents((err, results) => {
    if (err)
      return res.status(500).json({ message: err.message });

    res.status(200).json(results);
  });
};

// Get student by ID
exports.getStudent = (req, res) => {
  Student.getStudentById(req.params.id, (err, results) => {
    if (err)
      return res.status(500).json({ message: err.message });

    res.status(200).json(results);
  });
};

// Add student
exports.addStudent = (req, res) => {
  const { full_name, email, phone, course, year_level } = req.body;

  if (!full_name || !email || !phone || !course || !year_level) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  Student.addStudent(req.body, (err, result) => {
    if (err)
      return res.status(500).json({ message: err.message });

    res.status(201).json({
      message: "Student registered successfully",
    });
  });
};

// Update student
exports.updateStudent = (req, res) => {
  Student.updateStudent(req.params.id, req.body, (err) => {
    if (err)
      return res.status(500).json({ message: err.message });

    res.json({
      message: "Student updated successfully",
    });
  });
};

// Delete student
exports.deleteStudent = (req, res) => {
  Student.deleteStudent(req.params.id, (err) => {
    if (err)
      return res.status(500).json({ message: err.message });

    res.json({
      message: "Student deleted successfully",
    });
  });
};