import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductOfCAtComponent } from './all-product-of-cat.component';

describe('AllProductOfCAtComponent', () => {
  let component: AllProductOfCAtComponent;
  let fixture: ComponentFixture<AllProductOfCAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProductOfCAtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllProductOfCAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
