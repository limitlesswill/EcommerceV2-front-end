import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdThingComponent } from './thirdthing.component';

describe('ThirdThingComponent', () => {
  let component: ThirdThingComponent;
  let fixture: ComponentFixture<ThirdThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdThingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
