import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../../app/services/token-storage.service';

import * as $ from 'jquery';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  private roles: string[];

  search = faSearch;
  bars = faBars;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
this.isLoggedIn = !!this.tokenStorageService.getToken();
if (this.isLoggedIn) {
const user = this.tokenStorageService.getUser();
this.roles = user.roles;
this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
this.username = user.username;
}
}

logout() {
this.tokenStorageService.signOut();
window.location.reload();
}
}

