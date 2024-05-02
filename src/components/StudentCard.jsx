import { Link } from "react-router-dom";

export default function StudentCard({ student, deleteItem }) {
  return (
    <li className="card">
      <Link to={`/students/${student.id}?showAge=true&showBootcamp=true`}>
        {student.name}
      </Link>
      <button onClick={() => deleteItem(student.id)}>🗑️</button>
    </li>
  );
}
