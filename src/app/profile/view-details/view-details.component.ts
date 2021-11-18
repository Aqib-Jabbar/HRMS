import { Component, OnDestroy, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";

@Component({
  selector: "app-view-details",
  templateUrl: "./view-details.component.html",
  styleUrls: ["./view-details.component.css"],
})
export class ViewDetailsComponent implements OnInit , OnDestroy {
  id: any;
  secreteId = 0;
  subscription:any=Subscription;
  viewData: any = [
    {
      id: "",
      avatar: "",
      title: "",
      description: "",
      createdAt: "",
      countryName: "",
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private router: Router,
    private notify: ToastrService,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params.id;
    // console.log(this.id);
    this.subscription =this._userService.getProfileId(this.id).subscribe((res: any) => {
      // {id,avatar, title,description,createdAt,countryName} = res
      this.viewData = res;
    });
  }
  deleteProfile(viewData: any) {
    this._userService.deleteProfile(viewData);
    this.router.navigate(["/profile"]);
    this.getProfileAll();
    this.notify.success("Deleted");
  }

  getProfileAll() {
    this._userService.getProfileAll();
  }

  proIdSecreteHandler($event: number) {
    this.secreteId = $event;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
