import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkewbComponent } from './skewb.component';

describe('SkewbComponent', () => {
  let component: SkewbComponent;
  let fixture: ComponentFixture<SkewbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkewbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkewbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
