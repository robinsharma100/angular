import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsideComponent } from './cartside.component';

describe('CartsideComponent', () => {
  let component: CartsideComponent;
  let fixture: ComponentFixture<CartsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
