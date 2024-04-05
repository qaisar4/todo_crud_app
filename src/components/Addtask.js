import React, {useState, memo} from "react";
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";

function Addtask() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "tasks"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
        className="input_filed"
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add task</button>
      </div>
    </form>
  );
}

export default memo(Addtask);
