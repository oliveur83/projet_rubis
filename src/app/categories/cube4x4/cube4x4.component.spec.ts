import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube4x4Component } from './cube4x4.component';

describe('Cube4x4Component', () => {
  let component: Cube4x4Component;
  let fixture: ComponentFixture<Cube4x4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cube4x4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cube4x4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
