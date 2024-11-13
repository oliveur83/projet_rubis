import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronometreRubisComponent } from './chronometre-rubis.component';

describe('ChronometreRubisComponent', () => {
  let component: ChronometreRubisComponent;
  let fixture: ComponentFixture<ChronometreRubisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronometreRubisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronometreRubisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
