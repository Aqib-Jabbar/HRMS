import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Profile } from "src/app/core/model/profile";
import { ApiService } from "src/app/core/services/api.service";
import { CountryApiService } from "src/app/core/services/country-api.service";

@Component({
  selector: "app-edit-profile-data",
  templateUrl: "./edit-profile-data.component.html",
  styleUrls: ["./edit-profile-data.component.css"],
})
export class EditProfileDataComponent implements OnInit {
  id: any;

  postDataValue: Profile = {
    id: "",
    title: "",
    description: "",
    avatar: "",
    countryName: "",
    date: "",
  };
  countries: any;

  constructor(
    private updateService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private notify: ToastrService,
    private _countryService: CountryApiService
  ) {}

  ngOnInit(): void {
    this.getcountry();

    this.id = +this.route.snapshot.params.id;
    console.log(this.id);

    this.updateService.getProfileDataId(this.id).subscribe((res: Profile) => {
      // {this.id,this.title,this.description,this.avatar} = res
      this.postDataValue = res;
    });
  }

  updateProfile() {
    return this.updateService.updateProfile(this.postDataValue).subscribe(
      (res) => {
        this.router.navigate(["/profile"]);
        this.notify.success("Updated");
        // this.route.parent
        // this.router.navigate(['.'], {relativeTo: this.route.parent});
        // this.router.navigate(['/profile/viewDetails/'+ this.postDataValue.id])
      },
      (error) => {
        this.notify.error("Error:" + error);
      }
    );
  }
  getcountry() {
    this._countryService.getCountryData().subscribe((res) => {
      this.countries = res;
    });
  }
}
