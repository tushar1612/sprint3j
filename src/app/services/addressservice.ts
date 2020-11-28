import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';
@Injectable()
export class AddressService{
    baseUrl = 'http://localhost:8500/address';
    constructor(private http: HttpClient) {}
    addAddress(address: Address): Observable<Address>
    {
      const url = this.baseUrl + '/add';
      let requestData = {
        streetNo: address.streetNo,
        buildingName: address.buildingName,
        city: address.city,
        state: address.state,
        country: address.country,
        pincode: address.pincode,
      };
      let observable: Observable<Address> = this.http.post<Address>(
        url,
        requestData
      );
      return observable;
    }
    fetchAddress(): Observable<Address[]> {
      const url = this.baseUrl + '/viewall';
      let observable: Observable<Address[]> = this.http.get<Address[]>(url);
      return observable;
    }
  
    fetchAddressById(id: number): Observable<Address> {
      const url = this.baseUrl + '/get/id/' + id;
      let observable: Observable<Address> = this.http.get<Address>(url);
      return observable;
    }
    deleteAddressById(addressId: number){
      return this.http.delete("http://localhost:8500/address/remove/"+addressId);
    }
    updateAddress(address: any){
      return this.http.put("http://localhost:8500/address/update",address,{responseType:'text' as 'json'});
  }

}