
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/core/model/profile';

import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-profile-data',
  templateUrl: './edit-profile-data.component.html',
  styleUrls: ['./edit-profile-data.component.css']
})
export class EditProfileDataComponent implements OnInit {
  id:any;
 
  postDataValue:Profile = {
    id:"",
    title:"",
    description:"",
    avatar:""
    
  }


  constructor(private updateService:UserService,private route : ActivatedRoute, private router : Router) { 
    
    
  }

  ngOnInit(): void {
    
 this.id = +this.route.snapshot.params.id;

 this.updateService.getProfileDataId(this.id)
    .subscribe((res:Profile) => 
    {
                                    this.postDataValue = res;
                                })
   }

  updateProfile(){
   return this.updateService.updateProfile(this.postDataValue)
   .subscribe
   (
    res => 
        {
          this.router.navigate(['/profile']);
        }
   );
   
  }
 

}
