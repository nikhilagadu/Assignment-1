import { useState, useEffect } from "react";

function StudentForm({ addOrUpdateStudent, editingStudent }) {
  const [student, setStudent] = useState({
    full_name: "",
    email: "",
    phone: "",
    course: "",
    year_level: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    if (
      !student.full_name ||
      !student.email ||
      !student.phone ||
      !student.course ||
      !student.year_level
    ) {
      alert("Please fill all fields");
      return;
    }

    addOrUpdateStudent(student);

    setStudent({
      full_name: "",
      email: "",
      phone: "",
      course: "",
      year_level: "",
    });
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={student.full_name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={student.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />

        <input
          type="number"
          name="year_level"
          placeholder="Year"
          value={student.year_level}
          onChange={handleChange}
        />

        <button type="submit" className="add">
  {editingStudent ? "Update Student" : "Register Student"}
</button>
      </form>
    </div>
  );
}

export default StudentForm;