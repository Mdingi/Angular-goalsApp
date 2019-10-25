import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Khangelani"
  password = ''
  errorMessage='invalid credentials'
  invalidLogin = false

  //router
  //angular.giveMeRouter
  //dependancy Injection

  constructor(private router: Router,
    private HardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.HardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin= false
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin= true
    }  

  }

}
