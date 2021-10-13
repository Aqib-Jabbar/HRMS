import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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
  constructor(private route:ActivatedRoute , private _userService:UserService,private router:Router) { 
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    console.log(this.id);

   
      this._userService.getProfileId(this.id).subscribe((res:any) => {
        this.viewData = res
        // this.router.navigate(['/profile/viewDetails']);
        // this.router.navigate(["../sibling"],   {relativeTo: this.route});
        // console.log(this.viewData);
      })
      
    
  }
  deleteProfile(viewData:any){
    this._userService.deleteProfile(viewData);
    this.getProfileAll();
    this.router.navigate(['.'], {relativeTo: this.route.parent});
  }

  getProfileAll(){
    this._userService.getProfileAll();
  }

  

}
