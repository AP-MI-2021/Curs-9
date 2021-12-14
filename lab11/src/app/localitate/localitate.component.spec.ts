import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitateComponent } from './localitate.component';

describe('LocalitateComponent', () => {
  let component: LocalitateComponent;
  let fixture: ComponentFixture<LocalitateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
