import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSerialNumberComponent } from './model-serial-number.component';

describe('ModelSerialNumberComponent', () => {
  let component: ModelSerialNumberComponent;
  let fixture: ComponentFixture<ModelSerialNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSerialNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
