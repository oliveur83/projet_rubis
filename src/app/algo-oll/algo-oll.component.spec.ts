import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoOLLComponent } from './algo-oll.component';

describe('AlgoOLLComponent', () => {
  let component: AlgoOLLComponent;
  let fixture: ComponentFixture<AlgoOLLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoOLLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoOLLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
