import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';
import { AddressService } from '../services/addressservice';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent {
  address:Address | undefined;
  constructor(private addressService: AddressService) {}
  fetchAddress(myform: any) {
    let data = myform.value;
    let id: number = data.addressId;
    let observable: Observable<Address> = this.addressService.fetchAddressById(
      id
    );
    // let successHandler = (product: Product) => (this.product = product);
    // let errHandler = (err) => console.log('error is' + err.message);
    observable.subscribe(
      (address: Address) => (this.address = address),
      (err) => console.log('error is' + err.message)
    );
  }
}