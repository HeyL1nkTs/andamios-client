import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufcturaComponent } from './manufctura.component';

describe('ManufcturaComponent', () => {
  let component: ManufcturaComponent;
  let fixture: ComponentFixture<ManufcturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufcturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManufcturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
