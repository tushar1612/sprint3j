import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/productservice';
import { HttpClientModule } from '@angular/common/http';
import { ProductListBycategoryComponent } from './product-list-bycategory/product-list-bycategory.component';
import { ProductsComponent } from './products/products.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './services/categoryservice';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddressListComponent } from './address-list/address-list.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { AddressService } from './services/addressservice';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductListBycategoryComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    UpdateProductComponent,
    AddCategoryComponent,
    CategoryDetailsComponent,
    CategoryComponent,
    AddressComponent,
    AddAddressComponent,
    AddressDetailsComponent,
    AddressListComponent,
    UpdateAddressComponent,
  ],
  imports: [BrowserModule, FormsModule,AppRoutingModule, ReactiveFormsModule , HttpClientModule],
  providers: [ProductService, CategoryService,AddressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
