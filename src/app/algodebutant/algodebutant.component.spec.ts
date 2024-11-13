import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgodebutantComponent } from './algodebutant.component';

describe('AlgodebutantComponent', () => {
  let component: AlgodebutantComponent;
  let fixture: ComponentFixture<AlgodebutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgodebutantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgodebutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
