import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bf3x3Component } from './bf3x3.component';

describe('Bf3x3Component', () => {
  let component: Bf3x3Component;
  let fixture: ComponentFixture<Bf3x3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bf3x3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bf3x3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
