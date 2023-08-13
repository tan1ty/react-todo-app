export interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiDataType {
  message: string;
  todos: ITodo[];
}

export interface NewTodo {
  name: ITodo['name'];
  description: ITodo['description'];
  status?: ITodo['status'];
}

export interface TodoToUpdate {
  _id: ITodo['_id'];
  name: ITodo['name'];
  description: ITodo['description'];
  status: ITodo['status'];
}
