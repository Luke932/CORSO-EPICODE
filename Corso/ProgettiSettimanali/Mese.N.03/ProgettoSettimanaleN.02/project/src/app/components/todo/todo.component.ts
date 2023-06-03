import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  title: string = 'Pippo';
  completedTodos: Todo[] = [];
  messageNoComplete: boolean = false;
  addTask: boolean = false;
  searchTask: boolean = false;


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos();
    this.searchTask = true;
    setTimeout(() => {
      this.searchTask = false;
      this.messageNoComplete = this.todos.length === 0;
    }, 2000);
  }

  fetchTodos(): void {
    this.todoService.getTodos()
      .then(todos => this.todos = todos)
      .catch(error => console.log(error));
  }

  addTodo(): void {
    this.addTask = true;
    this.messageNoComplete = false;
    const newTodo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false
    };

    this.todoService.addTodo(newTodo)
      .then(() => {
        this.title = '';
        this.fetchTodos();
        this.messageNoComplete = false;
        this.addTask = false;
      })
      .catch(error => console.log(error));
  }

  removeAndAddToCompleted(todo: Todo): void {
    this.todoService.removeTodoById(todo.id)
      .then((removedTodo) => {
        removedTodo.completed = true;
        this.todoService.addToCompleted(removedTodo);
          this.fetchCompletedTodos();
          this.messageNoComplete = this.todos.length === 0;
      })
      .catch(error => console.log(error));
  }

  fetchCompletedTodos(): void {
    this.completedTodos = this.todoService.getCompletedTodos();
  }


}
