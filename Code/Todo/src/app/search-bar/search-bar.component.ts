import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() addTodo = new EventEmitter<string>(); // custom addTodo event
  task = ''; // this variable will contain the value entered inside the input tag
  constructor() {}
  handleInput(e): void {
    this.task = e.target.value; // set value of task from input event
  }
  handleSubmit(e): void {
    e.preventDefault(); // so that form does not submit
    this.addTodo.emit(this.task); // emit the task so that parent adds new todo
    this.task = ''; // reset task so that input resets
  }
  ngOnInit(): void {}
}
