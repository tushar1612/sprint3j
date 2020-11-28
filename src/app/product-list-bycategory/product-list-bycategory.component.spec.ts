import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListBycategoryComponent } from './product-list-bycategory.component';

describe('ProductListBycategoryComponent', () => {
  let component: ProductListBycategoryComponent;
  let fixture: ComponentFixture<ProductListBycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListBycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListBycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
