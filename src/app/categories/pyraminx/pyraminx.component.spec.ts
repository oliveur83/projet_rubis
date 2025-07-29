import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyraminxComponent } from './pyraminx.component';

describe('PyraminxComponent', () => {
  let component: PyraminxComponent;
  let fixture: ComponentFixture<PyraminxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyraminxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyraminxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
