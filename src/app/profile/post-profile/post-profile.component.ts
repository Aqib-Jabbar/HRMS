import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Profile } from 'src/app/core/model/profile';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    avatar:""
}

  constructor(private _apiService:ApiService, private notify:ToastrService) { }

  ngOnInit(): void {
  }

  postProfile(){
    this._apiService.postProfileData(this.postDataValue).subscribe((postDataValue:Profile)=>{
     this.postDataValue = postDataValue;
     this.notify.success('Successfully Created');
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
    

}
