import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube2x2Component } from './cube2x2.component';

describe('Cube2x2Component', () => {
  let component: Cube2x2Component;
  let fixture: ComponentFixture<Cube2x2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cube2x2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cube2x2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
