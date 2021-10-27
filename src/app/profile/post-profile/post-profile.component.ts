import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Profile } from 'src/app/core/model/profile';
import { ToastrService } from 'ngx-toastr';

import { CountryApiService } from 'src/app/core/services/country-api.service';


@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent implements OnInit {


  postDataValue = {
    id:"",
    title :"",
    description :"",
    avatar:"",
    countryName:""
}
countries:any;

  constructor(private _apiService:ApiService, private notify:ToastrService, private _countryService:CountryApiService) { }

  ngOnInit(): void {
    this.getCountries();
  }
  
  postProfile(){
    this._apiService.postProfileData(this.postDataValue).subscribe((postDataValue:Profile)=>{
      this.postDataValue = postDataValue;
      // console.log(this.postDataValue);
     this.notify.success('Created');
     this.reset();
 
     location.reload();
    }, error => {
      this.notify.error("Error:" + error)})
  }
  
  
  private reset() {
    this.postDataValue.id="",
    this.postDataValue.title = "",
    this.postDataValue.description ="",
    this.postDataValue.avatar=""
  }

  getCountries() {
    return this._countryService.getCountryData().subscribe(res=>{
      this.countries =  res;
      // console.log(this.countries);
    })
  }

  
    

}
