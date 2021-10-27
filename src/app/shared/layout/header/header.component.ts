import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileJson: unknown;
  constructor(public _authService: AuthService, @Inject(DOCUMENT) private doc: Document, private router:Router) { }

  ngOnInit(): void {
    this._authService.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile,null,2)),
      
    );
  }

  loginWithRedirect(): void {
  
    // const token =localStorage.getItem('token');
    this._authService.loginWithRedirect().subscribe(res => {
      this.router.navigate(['/profile'])

    })
  }

  
  logout(): void {
    this._authService.logout({ returnTo: this.doc.location.origin });
 
  }
 



  
}






