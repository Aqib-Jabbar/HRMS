import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment1 as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  // https://restcountries.com/#api-endpoints-v2 link of api
//  apiUrl="https://restcountries.com/v2/all"
  

constructor(private http:HttpClient) { }

  getCountryData(): Observable<any> {
   return this.http.get(env.country_url);
  }


}
