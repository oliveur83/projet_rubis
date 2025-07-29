import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bf5x5Component } from './bf5x5.component';

describe('Bf5x5Component', () => {
  let component: Bf5x5Component;
  let fixture: ComponentFixture<Bf5x5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bf5x5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bf5x5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
