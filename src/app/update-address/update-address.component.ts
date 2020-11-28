import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../model/address';
import { AddressService } from '../services/addressservice';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  message: string | undefined;
  address:Address | undefined;
  // id!: Number;
  // id!: Number;
  myUpdationForm!: FormGroup;
addressId: Number | undefined;

  constructor(private aroute:ActivatedRoute, private addressService:AddressService,
    private router:Router) { }
  // constructor(private customerService:CustomerAddService,private router:Router){}

  ngOnInit(): void {

    // this.id=this.aroute.snapshot.params.id;


    // this.myUpdationForm=new FormGroup({
    
    //   customerId:new FormControl(this.id),
    // customerName:new FormControl(null,Validators.required),
    // mobileNumber:new FormControl(null,Validators.required),
    // email:new FormControl(null,[Validators.required,Validators.email]),
    // password:new FormControl(null,Validators.required),
    // address:new FormControl(null,[Validators.required,Validators.minLength(3)]),
          
    // });

    let addressId = this.aroute.snapshot.params.id;
    this.myUpdationForm=new FormGroup({
      

      addressId!:new FormControl(addressId,Validators.required),
      streetNo:new FormControl(null,Validators.required),
      buildingName:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required),
      state:new FormControl(null,Validators.required),
      country:new FormControl(null,Validators.required),
      pincode:new FormControl(null,Validators.required),

    });
 
    
     
  }

  updateAddress(){

      if(this.myUpdationForm.valid){
      
      this.address=this.myUpdationForm.value;

        let resp=this.addressService.updateAddress(this.address);
        resp.subscribe(data=>alert("Updated successfully"));
    // this.customerService.updateCustomer(this.customer).subscribe(data=>alert("Updated Sucessfully"));
    this.router.navigate(["/address-home/list-address"]);
    
  
  }else{
    this.message="Please Fill all the Fields.."
  }

}


}
