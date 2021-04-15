import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightpartComponent } from './rightpart.component';

describe('RightpartComponent', () => {
  let component: RightpartComponent;
  let fixture: ComponentFixture<RightpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
