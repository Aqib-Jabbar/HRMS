import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";

import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  profileJson: unknown;
  constructor(
    public _authService: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this._authService.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  loginWithRedirect(): void {
    this._authService.loginWithRedirect();
  }

  logout(): void {
    this._authService.logout({ returnTo: this.doc.location.origin });
    localStorage.removeItem("Uname");
  }

  // token(){
  // const token1 = await this._authService.getAccessTokenSilently();
  // this._authService.getAccessTokenSilently().subscribe(res =>{
  //   this.token1 = res
  //  localStorage.setItem("Uname",this.token1)
  //   console.log(this.token1);
  // })
  // }
}
