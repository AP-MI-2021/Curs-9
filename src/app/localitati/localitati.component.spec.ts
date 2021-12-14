import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitatiComponent } from './localitati.component';

describe('LocalitatiComponent', () => {
  let component: LocalitatiComponent;
  let fixture: ComponentFixture<LocalitatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
