import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../model/profile';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // profile CRUD operations
  // Link { https://jsonplaceholder.typicode.com/users } from fake api


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


// Extras for my own

// const httpHeaders = new HttpHeaders();
//     httpHeaders.append('content-type', 'application/json');
//     console.log(postdata);
