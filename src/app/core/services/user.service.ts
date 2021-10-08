import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../model/profile';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  isShow?: boolean;

  constructor(private http: HttpClient) { }

  // profile CRUD operations
  // Link { https://jsonplaceholder.typicode.com/users } from fake api


  getProfileData(): Observable<Profile> {
    return this.http.get<Profile>('https://615d577712571a0017207565.mockapi.io/api/v1/employees/');
  }
  getProfileDataId(id: Profile): Observable<Profile> {
    return this.http.get<Profile>('https://615d577712571a0017207565.mockapi.io/api/v1/employees/' + id)
  }

  postProfileData(data: any): Observable<Profile> {
    return this.http.post<Profile>('https://615d577712571a0017207565.mockapi.io/api/v1/employees/', data);
  }

  deleteProfileData(userId: any): Observable<Profile> {
    return this.http.delete<Profile>('https://615d577712571a0017207565.mockapi.io/api/v1/employees/' + userId);
  }
  updateProfile(postdata: Profile) {
    return this.http.put<Profile>(`https://615d577712571a0017207565.mockapi.io/api/v1/employees/` + postdata.id, postdata);
  }
}


// Extras for my own

// const httpHeaders = new HttpHeaders();
//     httpHeaders.append('content-type', 'application/json');
//     console.log(postdata);
