import React, { useEffect, useState } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './api';
import { NewTodo, TodoToUpdate, ITodo } from './interface';

const App: React.FC = () => {
  const [newTask, setNewTask] = useState({
    name: '',
    status: false,
    description: '',
  });

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = (): void => {
    fetchTodos()
      .then((res) => {
        setTodos(res?.data?.todos || []);
      })
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (formData: NewTodo): void => {
    addTodo(formData)
      .then(({ data }) => {
        setTodos(data.todos);
        setNewTask({ name: '', status: false, description: '' });
      })

      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>To-do list</h1>
      <input
        className="new-task"
        type="text"
        value={newTask.name}
        placeholder="Name you task"
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <button onClick={() => handleSaveTodo(newTask)}>AddTask</button>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span>{todo.name}</span>
          <input type="text" value={todo.description} />
        </li>
      ))}
    </main>
  );
};

export default App;
