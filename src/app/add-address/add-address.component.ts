import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';
import { AddressService } from '../services/addressservice';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})


export class AddAddressComponent {
  address:Address | undefined;
  constructor(private addressService: AddressService){}
  addAddress(myform:any)
  {
    let data=myform.value;
    this.address=new Address(
      0,
      data.streetNo,
      data.buildingName,
      data.city,
      data.state,
      data.country,
      data.pincode   );
      let observable: Observable<Address> = this.addressService.addAddress(
        this.address
      );
      observable.subscribe(
        (address: Address) => (this.address = address),
        (err) => console.log('error is' + err.message)
      );
      myform.reset();
    }
}