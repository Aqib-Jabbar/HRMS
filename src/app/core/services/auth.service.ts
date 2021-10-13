import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isShow!:boolean;
  constructor(private router:Router) { }
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == 'aqib' && pwd == '123') {
      
      localStorage.setItem('username', "admin");
      this.isShow=true; 
      return true;
     } else if (uname == 'a@a.com' && pwd == "123"){
      localStorage.setItem('username','admin2')
      return true
    }  
    else {
      return false
    }

  }
  loggedIn(){
    return !!localStorage.getItem('username');
  }
  logout() {
    
    localStorage.removeItem('username');
    this.router.navigate(['/home']);
    
   
  }
  username(){
    return this.username;
  }
}
