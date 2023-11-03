import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductCardComponent } from './popular-product-card.component';

describe('PopularProductCardComponent', () => {
  let component: PopularProductCardComponent;
  let fixture: ComponentFixture<PopularProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularProductCardComponent]
    });
    fixture = TestBed.createComponent(PopularProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
