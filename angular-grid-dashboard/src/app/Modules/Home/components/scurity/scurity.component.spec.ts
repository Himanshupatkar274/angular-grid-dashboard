import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScurityComponent } from './scurity.component';

describe('ScurityComponent', () => {
  let component: ScurityComponent;
  let fixture: ComponentFixture<ScurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
