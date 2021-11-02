import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent {
  // message!: string;

  constructor(public auth0: AuthService, private route: Router) {}
  // isShow!: boolean;
  // ngOnInit(): void {
  // }
  // check(email: any, password: any) {
  //   var output = this.userService.checkusernameandpassword(email, password);
  //   if (output == true) {
  //     // console.log(email)
  //     this.route.navigate(['/profile'])
  //     this.isShow = true
  //   }
  //   else {

  //     this.message = '**Please type correct username && password'
  //   }

  // }
  // loginWithRedirect(): void {
  //   this.auth0.loginWithRedirect();
  // this.route.navigate(['/profile'])
  // }
}
