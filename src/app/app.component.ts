import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


import { concatMap,tap,pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  metadata:unknown = {};

 
  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.auth.user$
    .pipe(
      concatMap((user:any) =>
 
        this.http.get(
          encodeURI(`https://dev-ey-a0tus.us.auth0.com/api/v2/users/${user.sub}`)
        )
      ),
      pluck('user_metadata'),
      tap((meta) => (this.metadata = meta))
    )
    .subscribe();
    
  }

}
