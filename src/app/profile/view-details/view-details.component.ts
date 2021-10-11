import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/core/model/profile';
import { UserService } from 'src/app/core/services/user.service';
import {} from '../../core/model/profile'

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id:any;
  viewData:Profile = {
    id:'',
    avatar:'',
    title:'',
    description:''
  }
  constructor(private route:ActivatedRoute , private _userService:UserService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    console.log(this.id);

   
      this._userService.getProfileDataId(this.id).subscribe(res => {
        this.viewData =res
        console.log(this.viewData);
      })
    
  }

}
