import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiblindComponent } from './multiblind.component';

describe('MultiblindComponent', () => {
  let component: MultiblindComponent;
  let fixture: ComponentFixture<MultiblindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiblindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiblindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
