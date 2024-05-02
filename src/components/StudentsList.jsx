import "./StudentsList.css";
import StudentCard from "./StudentCard";

export default function StudentsList({ students, deleteItem }) {
  // const [name, setName] = useState("");

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // const addItem = () => {
  //   const id = items.length + 1;
  //   setItems([...items, { id, name }]);
  //   setName("");
  // };

  return (
    <div className="wrapper">
      {/* <div>
        <div className="form-wrapper">
          <input type="text" value={name} onChange={handleChange} />
          <button onClick={addItem}>Add</button>
        </div>
      </div> */}
      <ul>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
