import ToDoItem from './ToDoItem';
import './ToDoList.css';

export default function ToDoList({ todos, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
