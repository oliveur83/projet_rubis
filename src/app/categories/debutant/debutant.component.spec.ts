import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebutantComponent } from './debutant.component';

describe('DebutantComponent', () => {
  let component: DebutantComponent;
  let fixture: ComponentFixture<DebutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebutantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
