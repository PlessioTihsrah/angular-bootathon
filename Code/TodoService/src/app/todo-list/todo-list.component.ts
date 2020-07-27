import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos = [];
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
    this.todoService.todoNotifier.subscribe(() => {
      // dont use function() or this will be messed
      this.todos = this.todoService.getTodos();
    });
  }
  toggleItem(i: number) {
    this.todoService.flipTodo(i);
  }
  removeItem(event, index: number) {
    event.stopPropagation();
    this.todoService.removeTodo(index);
  }
  ngOnInit(): void {}
}
