import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpartComponent } from './leftpart.component';

describe('LeftpartComponent', () => {
  let component: LeftpartComponent;
  let fixture: ComponentFixture<LeftpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
