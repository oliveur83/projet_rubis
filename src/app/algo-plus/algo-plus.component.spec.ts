import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoPlusComponent } from './algo-plus.component';

describe('AlgoPlusComponent', () => {
  let component: AlgoPlusComponent;
  let fixture: ComponentFixture<AlgoPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoPlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
