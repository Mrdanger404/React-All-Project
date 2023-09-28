import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todoText]);
    setTodoText('');
  };

  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo}</p>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
