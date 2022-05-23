import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // to load a page programatically we need a service of router
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loadProduct(){
    this.router.navigate(['products'])
  }
}
