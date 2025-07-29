import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube5x5Component } from './cube5x5.component';

describe('Cube5x5Component', () => {
  let component: Cube5x5Component;
  let fixture: ComponentFixture<Cube5x5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cube5x5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cube5x5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
