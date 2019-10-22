import { NgModule } from "@angular/core";
import { Route,Routes, RouterModule} from "@angular/router";
import { SignupComponent } from './userauth/signup/signup.component';
import { LoginComponent } from './userauth/login/login.component';
import { UserauthComponent } from './userauth/userauth.component';

const Routes:Routes = [
    {path:'',component:UserauthComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{ }