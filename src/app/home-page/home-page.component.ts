import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../Services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // to load a page programatically we need a service of router
  constructor(private router:Router, private authService:authService) { }

  ngOnInit(): void {
  }
  loadProduct(){
    this.router.navigate(['products'])
  }

  onLogIn(){
    this.authService.logIn()
  }
  onLogout(){
    this.authService.logOut()
  }
}
