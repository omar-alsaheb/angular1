import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDataBoardComponent } from './role-data-board.component';

describe('RoleDataBoardComponent', () => {
  let component: RoleDataBoardComponent;
  let fixture: ComponentFixture<RoleDataBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleDataBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDataBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
