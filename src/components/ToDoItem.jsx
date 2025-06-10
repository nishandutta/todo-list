import React, { useState } from 'react';
import './ToDoItem.css';
import { FaCheckCircle,FaPen, FaTrash,FaCheck } from 'react-icons/fa';

export default function ToDoItem({ todo, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(false);
    editTask(todo.id, editText);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          />
          <div className="actions">
            <button onClick={handleEdit}>Save</button>
          </div>
        </>
      ) : (
        <>
          <span>
            {todo.text} {todo.completed && <><FaCheckCircle className="check-icon" /> <span className="status">(completed)</span></>}
          </span>
          <div className="actions">
            <select value={todo.completed ? 'Completed' : 'Pending'}
                onChange={(e) => toggleTask(todo.id, e.target.value)} className="status-dropdown">
                <option value="Pending">⏳ Pending</option>
                <option value="Completed">✅ Completed</option>
            </select>
            <button id='edit-button' onClick={() => setIsEditing(true)}>
                <FaPen style={{ marginRight: '6px' }} />
                Edit</button>
            <button id='delete-button' onClick={() => deleteTask(todo.id)}>
                <FaTrash style={{ marginRight: '6px' }} />
                Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
