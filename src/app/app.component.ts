import { Component } from "@angular/core";

// import { AuthService } from '@auth0/auth0-angular';
// import { HttpClient } from '@angular/common/http';
// import { concatMap,tap,pluck } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  metadata: unknown = {};
  getToken?: string;

  constructor() {}
}
