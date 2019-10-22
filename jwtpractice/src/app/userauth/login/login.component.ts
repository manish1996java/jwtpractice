import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  

  constructor(private userauthService:UserauthService) { }

  ngOnInit() {
    
    this.loginform = new FormGroup({
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      // imagefile:new FormControl(null)
    })
  }
  
  onImagePicked(event:Event){
    
    console.log(this.loginform);
    const file = (event.target as HTMLInputElement).files[0];
    this.loginform.patchValue({
      imagefile: file
    });
    this.loginform.get('imagefile').updateValueAndValidity();
    console.log(file);
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagepreview = ""+reader.result;
    }
    reader.readAsDataURL(file);
    console.log(this.loginform);
  }
  imagepreview: string;
  submit(){
    // console.log(this.loginform);
    const user = new User(this.loginform.value.email,this.loginform.value.password);
    this.userauthService.onLogin(user);
  }
}
