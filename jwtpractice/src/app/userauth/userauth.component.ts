import { Component, OnInit,ViewChild , ElementRef } from '@angular/core';
import { BuiltinType } from '@angular/compiler';
import { Button } from 'protractor';
import { UserauthService } from './userauth.service';

@Component({
  selector: 'app-userauth',
  templateUrl: './userauth.component.html',
  styleUrls: ['./userauth.component.css']
})
export class UserauthComponent implements OnInit {


 
  constructor(private authservice:UserauthService) { }

  ngOnInit() {
  }
  
  check(){
    this.authservice.ontest();
  }
  logout(){
    this.authservice.logout()
  }
}
