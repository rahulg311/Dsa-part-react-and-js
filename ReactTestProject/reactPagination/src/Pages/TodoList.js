import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      const updatedTasks = tasks.map((item, index) =>
        index === editId ? task : item
      );
      setTasks(updatedTasks);
      setEditId(null);
    } else {
      setTasks((prev) => [...prev, task]);
    }
    setTask("");
  };

  const handleEdit = (index, item) => {
    setEditId(index);
    setTask(item);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a task"
            value={task}
            required
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            {editId !== null ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </form>
      <ul className="list-group">
        {tasks.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <div>
              <button
                onClick={() => handleEdit(index, item)}
                className="btn btn-sm btn-warning me-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;