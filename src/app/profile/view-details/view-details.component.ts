import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  id:any;
  viewData:any = [{
    id:'',
    avatar:'',
    title:'',
    description:'',
    createdAt:''
  }]
  constructor(private route:ActivatedRoute , private _userService:UserService,private router:Router, private notify:ToastrService) { 
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    // console.log(this.id);
      this._userService.getProfileId(this.id).subscribe((res:any) => {
        this.viewData = res
    
      })
      
    
  }
  deleteProfile(viewData:any){
    this._userService.deleteProfile(viewData);
    this.getProfileAll();
    this.router.navigate(['/profile']);
    this.notify.success('Successfully Deleted');
   
  }

  getProfileAll(){
    this._userService.getProfileAll();
  }

  

}
