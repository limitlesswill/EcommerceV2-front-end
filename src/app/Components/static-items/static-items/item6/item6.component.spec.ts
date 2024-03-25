import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item6Component } from './item6.component';

describe('Item6Component', () => {
  let component: Item6Component;
  let fixture: ComponentFixture<Item6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Item6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Item6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
