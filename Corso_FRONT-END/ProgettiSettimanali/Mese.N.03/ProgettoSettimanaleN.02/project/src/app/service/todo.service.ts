import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.interface";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = [];
  private completed: Todo[] = [];

  constructor() {}

  getTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 2000);
    });
  }

  addTodo(todo: Todo): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todos.push(todo);
        resolve();
      }, 2000);
    });
  }

  removeTodoById(id: number): Promise<Todo> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          const todo = this.todos.splice(index, 1)[0];
          resolve(todo);
        } else {
          reject(new Error("Todo not found"));
        }
      }, 2000);
    });
  }

  getCompletedTodos(): Todo[] {
    return this.completed;
  }

  addToCompleted(todo: Todo): void {
    this.completed.push(todo);
  }

  moveToCompleted(id: number): void {
    setTimeout(() => {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const todo = this.todos.splice(index, 1)[0];
        this.completed.push(todo);
      }
    }, 2000);
  }
}
