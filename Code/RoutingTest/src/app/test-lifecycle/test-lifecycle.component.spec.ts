import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLifecycleComponent } from './test-lifecycle.component';

describe('TestLifecycleComponent', () => {
  let component: TestLifecycleComponent;
  let fixture: ComponentFixture<TestLifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
