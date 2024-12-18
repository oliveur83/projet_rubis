import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoProfilComponent } from './algo-profil.component';

describe('AlgoProfilComponent', () => {
  let component: AlgoProfilComponent;
  let fixture: ComponentFixture<AlgoProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgoProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
