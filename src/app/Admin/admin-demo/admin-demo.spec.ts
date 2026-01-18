import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDemo } from './admin-demo';

describe('AdminDemo', () => {
  let component: AdminDemo;
  let fixture: ComponentFixture<AdminDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
