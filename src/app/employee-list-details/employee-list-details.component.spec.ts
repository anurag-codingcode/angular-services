import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListDetailsComponent } from './employee-list-details.component';

describe('EmployeeListDetailsComponent', () => {
  let component: EmployeeListDetailsComponent;
  let fixture: ComponentFixture<EmployeeListDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
