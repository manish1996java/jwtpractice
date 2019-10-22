import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserauthService } from '../userauth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm:FormGroup;
  constructor(private userauthService:UserauthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
    })
  }
  submit(){
  
  const user = new User(this.signupForm.value.email,this.signupForm.value.password);
  this.userauthService.onSignup(user);
  }

}
