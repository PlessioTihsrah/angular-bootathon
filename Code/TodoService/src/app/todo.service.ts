import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: { title: string; completed: boolean }[] = [];
  todoNotifier = new Subject();
  getTodos() {
    return [...this.todos]; // this creates a copy of todos array
  }
  notifiyEveryone() {
    // notify every subscriber that change has occured
    this.todoNotifier.next();
  }
  addTodos(title: string) {
    this.todos.push({
      title,
      completed: false,
    });
    this.notifiyEveryone();
  }
  flipTodo(i: number) {
    this.todos[i].completed = !this.todos[i].completed;
    this.notifiyEveryone();
  }
  removeTodo(i: number) {
    this.todos.splice(i, 1);
    this.notifiyEveryone();
  }
  constructor() {}
}
