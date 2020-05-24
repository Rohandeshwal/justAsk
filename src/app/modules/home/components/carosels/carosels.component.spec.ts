import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselsComponent } from './carosels.component';

describe('CaroselsComponent', () => {
  let component: CaroselsComponent;
  let fixture: ComponentFixture<CaroselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaroselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
