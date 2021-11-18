import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env} from 'src/environments/environment';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProfileData(): Observable<Profile> {
    return this.http.get<Profile>(env.api_url);
  }
  getProfileDataId(id: Profile): Observable<Profile> {
    return this.http.get<Profile>(env.api_url + id)
  }

  postProfileData(data: Profile): Observable<Profile> {
    return this.http.post<Profile>(env.api_url, data);
  }

  deleteProfileData(userId: any): Observable<Profile> {
    return this.http.delete<Profile>(env.api_url + userId);
  }
  updateProfile(postdata: Profile): Observable<Profile>{
    return this.http.put<Profile>(env.api_url + postdata.id, postdata)
  }
}
