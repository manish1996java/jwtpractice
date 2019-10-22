import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserauthService } from './userauth.service';

export class UserAuthInterceptor implements HttpInterceptor{
    
    constructor(private authservice:UserauthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler){
        // console.log("interceptor run");
        // console.log(this.authservice.getToken());
        const token = this.authservice.getToken();
        const clonerequest = req.clone({
            headers: req.headers.set("Authorization","bearer "+ token)
        })
        // console.log("interceptor:",token);
        return next.handle(clonerequest);
    }

}