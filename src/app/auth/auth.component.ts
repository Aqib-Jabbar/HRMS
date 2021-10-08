import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth.service'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  message!: string;

  constructor(private userService: AuthService, private route: Router) { }
  isShow!: boolean;
  ngOnInit(): void {
  }
  check(email: any, password: any) {
    var output = this.userService.checkusernameandpassword(email, password);
    if (output == true) {
      this.route.navigate(['/profile'])
      this.isShow = true
    }
    else {

      this.message = '**Please type correct username && password'
    }

  }


}


