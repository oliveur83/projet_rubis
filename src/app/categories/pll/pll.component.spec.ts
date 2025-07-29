import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PllComponent } from './pll.component';

describe('PllComponent', () => {
  let component: PllComponent;
  let fixture: ComponentFixture<PllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
