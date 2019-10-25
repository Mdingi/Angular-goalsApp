import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn:boolean = false;

  constructor(private HardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.HardcodedAuthenticationService.isUserLoggedIn();
  }

}
