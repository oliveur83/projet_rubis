import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bf4x4Component } from './bf4x4.component';

describe('Bf4x4Component', () => {
  let component: Bf4x4Component;
  let fixture: ComponentFixture<Bf4x4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bf4x4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bf4x4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
