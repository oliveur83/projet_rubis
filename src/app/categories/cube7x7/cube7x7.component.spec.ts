import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube7x7Component } from './cube7x7.component';

describe('Cube7x7Component', () => {
  let component: Cube7x7Component;
  let fixture: ComponentFixture<Cube7x7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cube7x7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cube7x7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
