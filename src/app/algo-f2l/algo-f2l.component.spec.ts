import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoF2lComponent } from './algo-f2l.component';

describe('AlgoF2lComponent', () => {
  let component: AlgoF2lComponent;
  let fixture: ComponentFixture<AlgoF2lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoF2lComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoF2lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
