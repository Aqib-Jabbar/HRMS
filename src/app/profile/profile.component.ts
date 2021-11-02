import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiService } from "../core/services/api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  // template: '<img src="/images/spinner.gif" alt="The data is loading" />',
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileData: any[] = [];
  sub: any = Subscription;
  term: string = "";
  // spinner: boolean = false;

  constructor(private _apiService: ApiService, private notify: ToastrService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.sub = this._apiService.getProfileData().subscribe(
      (profileData: any) => {
        this.profileData = profileData;
      },
      (error) => {
        this.notify.error(error);
      }
    );
  }

  deleteProfile(card: any) {
    if (confirm("Are You Sure to post data!!!")) {
      this.sub = this._apiService.deleteProfileData(card.id).subscribe(
        (res) => {
          this.profileData = this.profileData.filter(
            (card) => card.id !== card.id
          );
          this.notify.success("Deleted!!");
          this.getProfile();
        },
        (error) => {
          this.notify.error("Error:" + error);
        }
      );
    }
  }
  ngOnDestroy() {
    // console.log("Ng on destroy work" + this.ngOnDestroy +this.sub);
    this.sub.unsubscribe();
  }
}
