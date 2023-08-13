import axios, { AxiosResponse } from 'axios';
import { ApiDataType, NewTodo, TodoToUpdate } from './interface';

const baseUrl: string = 'http://localhost:4000';

export const getTodos = async () => {
  const todos: AxiosResponse<ApiDataType> = await axios.get(baseUrl + '/todos');
  return todos;
};

export const addTodo = async (formData: NewTodo) => {
  const savedTodo: AxiosResponse<ApiDataType> = await axios.post(
    baseUrl + '/add-todo',
    formData
  );

  return savedTodo;
};

export const updateTodo = async (todo: TodoToUpdate) => {
  const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
    `${baseUrl}/edit-todo/${todo._id}`,
    { description: todo.description, name: todo.name, status: todo.status }
  );
  return updatedTodo;
};

export const deleteTodo = async (
  id: string
): Promise<AxiosResponse<ApiDataType>> => {
  const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
    `${baseUrl}/delete-todo/${id}`
  );
  return deletedTodo;
};
