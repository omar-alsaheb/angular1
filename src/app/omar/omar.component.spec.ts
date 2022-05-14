import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmarComponent } from './omar.component';

describe('OmarComponent', () => {
  let component: OmarComponent;
  let fixture: ComponentFixture<OmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
