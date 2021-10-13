
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

// import { emitWarning } from 'process';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  // get data from service
  profileData:any[]=[];
  term:string="";

 

  postDataValue = {
      id:"",
      title :"",
      description :"",
      avatar:""
  }
  errorMessage = '';
  profileName = '';

  
  // post data from template
  
  
  
  constructor(private _apiService: ApiService) {
    this.getProfile();
  }
  
  ngOnInit(): void {
    
  }
  getProfile(){
    this._apiService.getProfileData().subscribe((profileData:any)=>{
      this.profileData = profileData;
    },error => this.errorMessage = error)
  

  }


  postProfile(){
    this._apiService.postProfileData(this.postDataValue).subscribe((postDataValue:any)=>{
     this.postDataValue =postDataValue;
     this.profileName = postDataValue.title;
      this.reset();
      location.reload();
    }, error => this.errorMessage = error);
  }
  
  
  private reset() {
    this.postDataValue.id="",
    this.postDataValue.title = "",
    this.postDataValue.description ="",
    this.postDataValue.avatar="",
    this.errorMessage = '';
    this.profileName = '';
  }
  
  deleteProfile(card:any){
    if(confirm("Are You Sure to post data!!!")){
      
      this._apiService.deleteProfileData(card.id).subscribe(res => {
       this.profileData = this.profileData.filter(card => card.id !== card.id);
    
       this.getProfile();
     } );
    }
    
    
 }

}
