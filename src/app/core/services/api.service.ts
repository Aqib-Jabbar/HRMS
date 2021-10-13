import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProfileData(): Observable<Profile> {
    return this.http.get<Profile>(environment.api_url);
  }
  getProfileDataId(id: Profile): Observable<Profile> {
    return this.http.get<Profile>(environment.api_url + id)
  }

  postProfileData(data: Profile): Observable<Profile> {
    return this.http.post<Profile>(environment.api_url, data);
  }

  deleteProfileData(userId: any): Observable<Profile> {
    return this.http.delete<Profile>(environment.api_url + userId);
  }
  updateProfile(postdata: Profile): Observable<Profile>{
    return this.http.put<Profile>(environment.api_url + postdata.id, postdata);
  }
}
