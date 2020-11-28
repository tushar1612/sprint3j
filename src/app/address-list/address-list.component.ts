import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/addressservice';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses:any;
  // constructor(){}
  constructor(private addressService:AddressService) {
    
   }
  ngOnInit() {
    this.addressService.fetchAddress()
    .subscribe(data=>{
      this.addresses=data;
  
  });
  }

  removeAddress(addressId: number){
    let choice =confirm("Are You Sure ?");
      if(choice)
        this.addressService.deleteAddressById(addressId).subscribe(data=>this.addresses=data);

}
}
