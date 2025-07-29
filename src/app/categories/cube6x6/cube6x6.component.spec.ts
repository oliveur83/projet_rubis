import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube6x6Component } from './cube6x6.component';

describe('Cube6x6Component', () => {
  let component: Cube6x6Component;
  let fixture: ComponentFixture<Cube6x6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cube6x6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cube6x6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
