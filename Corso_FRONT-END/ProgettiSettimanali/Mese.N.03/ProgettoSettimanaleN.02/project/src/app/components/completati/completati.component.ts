import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  completedTodos: Todo[] = [];
  searchTask: boolean = false;


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchCompletedTodos();
    this.searchTask = true;
  }
  fetchCompletedTodos(): void {
    setTimeout(() => {
      this.searchTask = false;
      this.completedTodos = this.todoService.getCompletedTodos();
    }, 2000);
  }


}
