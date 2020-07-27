import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  // private todoService;
  todoTask = '';
  constructor(private todoService: TodoService) {
    // this.todoService = new TodoService();
  }
  handleInput(event) {
    this.todoTask = event.target.value;
  }
  handleSubmit(event) {
    event.preventDefault();
    this.todoService.addTodos(this.todoTask);
    this.todoTask = '';
  }

  ngOnInit(): void {}
}
