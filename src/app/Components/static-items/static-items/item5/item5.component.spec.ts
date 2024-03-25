import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item5Component } from './item5.component';

describe('Item5Component', () => {
  let component: Item5Component;
  let fixture: ComponentFixture<Item5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Item5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Item5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
