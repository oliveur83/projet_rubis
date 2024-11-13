import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoPLLComponent } from './algo-pll.component';

describe('AlgoPLLComponent', () => {
  let component: AlgoPLLComponent;
  let fixture: ComponentFixture<AlgoPLLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoPLLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoPLLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
