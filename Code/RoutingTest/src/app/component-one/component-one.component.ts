import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
})
export class ComponentOneComponent implements OnInit, OnChanges {
  counter = 0;
  increment() {
    this.counter++;
  }
  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('Init called');
  }
  ngOnChanges() {
    console.log('Changes called');
  }
  ngOnDestroy() {
    console.log('Component Destroyed');
  }
}
