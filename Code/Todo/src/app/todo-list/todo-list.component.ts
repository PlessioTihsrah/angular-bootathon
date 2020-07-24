import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() myTodos = []; // myTodos will be passed by parent, if not passed then default value of [] will be used
  @Output() toggle = new EventEmitter<number>(); // custom event for toggle of task status
  @Output() delete = new EventEmitter<number>(); // custom event to delete todo item
  constructor() {}

  ngOnInit(): void {}
  toggleItem(i: number): void {
    this.toggle.emit(i); // emit the custom event toggle with i as value
  }
  removeItem(event, index: number): void {
    event.stopPropagation(); // so that the parent element's click event does not occur
    this.delete.emit(index); // emit the custom event delete with index as value
  }
}
