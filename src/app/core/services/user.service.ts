import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Profile } from "../model/profile";
import { Observable, Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  subscription: any = Subscription;
  constructor(private _apiService: ApiService) {}

  getProfileId(userId: any): Observable<Profile> {
    return (this.subscription = this._apiService.getProfileDataId(userId));
  }

  deleteProfile(viewData: any) {
    if (confirm("Are you sure to delete?")) {
      this.subscription = this._apiService
        .deleteProfileData(viewData.id)
        .subscribe((res: any) => {
          res.pipe(filter((data: any) => data.id !== data.id));
        });

      this.getProfileAll();
    }
  }

  getProfileAll() {
    return (this.subscription = this._apiService.getProfileData().subscribe());
  }

  ngOnDestoy() {
    this.subscription.unsubscribe();
  }
}
