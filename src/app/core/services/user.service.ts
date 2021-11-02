import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Profile } from "../model/profile";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private _apiService: ApiService) {}

  getProfileId(userId: any): Observable<Profile> {
    return this._apiService.getProfileDataId(userId);
  }

  deleteProfile(viewData: any) {
    if (confirm("Are you sure to delete?")) {
      this._apiService.deleteProfileData(viewData.id).subscribe((res) => {
        viewData = viewData.filter((data: any) => data.id !== data.id);
      });
      this._apiService.getProfileData();
      // this.router.navigate(['/profile']);
    }
  }

  getProfileAll() {
    return this._apiService.getProfileData().subscribe();
  }
}

// const httpHeaders = new HttpHeaders();
//     httpHeaders.append('content-type', 'application/json');
//     console.log(postdata);
