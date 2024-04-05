import "./App.css";
import React, {useEffect, useState} from "react";
import Title from "./components/Title";
import Addtask from "./components/Addtask";
import {
  collection,
  deleteDoc,
  updateDoc,
  query,
  onSnapshot,
  doc,
} from "firebase/firestore";
import {db} from "./firebase";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({...doc.data(), id: doc.id});

      });
      setTasks(tasksArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "tasks", todo.id), {title: title});
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "tasks", todo.id), {completed: !todo.completed});
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <Addtask />
      </div>
      <div className="todo_container">
        {tasks.map((todo) => (
          <Tasks
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
