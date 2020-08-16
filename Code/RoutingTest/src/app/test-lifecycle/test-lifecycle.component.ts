import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-lifecycle',
  templateUrl: './test-lifecycle.component.html',
  styleUrls: ['./test-lifecycle.component.css'],
})
export class TestLifecycleComponent implements OnInit {
  @Input() counterValue = 0;
  interval;
  constructor() {}

  ngOnInit(): void {
    console.log('Init called');
    this.interval = setInterval(() => {
      console.log('hello');
    }, 1000);
  }
  ngOnChanges(changes) {
    console.log('Changes called', changes);
  }
  ngOnDestroy() {
    console.log('Component Destroyed');
    clearInterval(this.interval);
  }
}
