import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import studentsData from "./studentsData";
import "./App.css";
import Navbar from "./components/Navbar";

// Pages
import Homepage from "./Homepage";
import Listing from "./Listing";
import SingleStudent from "./SingleStudent";
import Error from "./Error";

function App() {
  const [students, setStudents] = useState(studentsData);

  const deleteItem = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage students={students} />} />
        <Route
          path="/students"
          element={<Listing students={students} deleteItem={deleteItem} />}
        />
        <Route
          path="/students/:studentId"
          element={<SingleStudent students={students} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
