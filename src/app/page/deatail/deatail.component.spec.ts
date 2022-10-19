import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailComponent } from './deatail.component';

describe('DeatailComponent', () => {
  let component: DeatailComponent;
  let fixture: ComponentFixture<DeatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
