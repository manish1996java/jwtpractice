import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable()
export class UserauthService {
  private token:string;
  constructor(public http:HttpClient) { }
  
  onSignup(user:User){
      console.log("this also work");
      this.http.post("http://localhost:9000/user/signup",user)
      .subscribe((res)=>{
        console.log(res);
      })
  }
  onLogin(user:User){
    console.log("this also work");
    this.http.post<{webtoken:string}>("http://localhost:9000/user/login",user).subscribe((res)=>{
        const token = res.webtoken;
        this.token = token;
        
        console.log("fetched token",this.token);
    })
  }

  ontest(){
    this.http.post<{message:string}>("http://localhost:9000/user/check","hello")
    .subscribe((val)=>{
        console.log(val);
    })
  }
  
  getToken(){
    return this.token;
  }

  logout(){
    this.token = null;
  }
}
