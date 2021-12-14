import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuteAutocarComponent } from './rute-autocar.component';

describe('RuteAutocarComponent', () => {
  let component: RuteAutocarComponent;
  let fixture: ComponentFixture<RuteAutocarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuteAutocarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuteAutocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
