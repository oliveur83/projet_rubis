import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaminxComponent } from './megaminx.component';

describe('MegaminxComponent', () => {
  let component: MegaminxComponent;
  let fixture: ComponentFixture<MegaminxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaminxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaminxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
