import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: { title: string; completed: boolean }[] = []; // this array will contain all the todo items
  addMyTodo(data: string): void {
    // add a new item to array of todos
    this.todos.push({
      title: data,
      completed: false,
    });
  }
  flipCompleted(index: number): void {
    // flip the boolean value completed in todos array at given index
    this.todos[index].completed = !this.todos[index].completed;
  }
}
