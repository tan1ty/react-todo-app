import React, { useEffect, useState } from 'react';
import { getTodos, addTodo } from './api';
import { ITodo } from './interface';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then((res) => {
        setTodos(res?.data?.todos || []);
      })
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (formData: ITodo): void => {
    addTodo(formData)
      .then(({ data }) => {
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  // your implementation for handleSaveTodo
  // your implementation for handleDeleteTodo

  return (
    <main className="App">
      <h1>To-do list</h1>
      {todos.map((todo: ITodo) => (
        <li key={todo._id}>
          <span>
            {todo.name}: Completed: &nbsp; {todo.status.toString()}
          </span>
          <div>Description: &nbsp; {todo.description}</div>
        </li>
      ))}
    </main>
  );
};

export default App;
