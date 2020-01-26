import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
    HttpErrorResponse,
    HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map,tap } from "rxjs/operators";
// import { AuthService } from "../services/auth/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
import { UtilsService } from '../Services/utils/utils.service';
import { LoaderService } from '../Services/Loader/loader.service';

@Injectable({
    providedIn: "root"
})     
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private utils: UtilsService, private loaderService: LoaderService,private router:Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.utils.getToken();
    console.log(authToken,"Token here")  
    if (authToken) {  
        this.utils.setLocalStorage("showLoader",'Yes')
      const cloned = req.clone({
        headers: req.headers
          .set("Authorization", 'Bear'+''+authToken)
      });   
      return next.handle(cloned).pipe(
        tap(evt => {
            if (evt instanceof HttpResponse) {
              this.utils.removeLocalStorage("showLoader")
        }     
      }),     
      catchError((error: HttpErrorResponse) => {
        this.utils.removeLocalStorage("showLoader")
        if (error.status == 403 && error.error.errorMessage.includes("Token")) {
          // localStorage.clear();
          // this.router.navigateByUrl('dashboard')
          //   location.reload(); 
        }  
        return throwError(error);
    })
        
            
);
    } 
    else {
      // this.loaderService.httpLoadershow();
      this.utils.setLocalStorage("showLoader",'Yes')
      const cloned = req.clone({    
        headers: req.headers.set("Device-Type", "Web")
      });   
      return next.handle(cloned).pipe(
        tap(evt => {
            if (evt instanceof HttpResponse) {
              this.utils.removeLocalStorage("showLoader")
              // this.loaderService.httpLoaderHide()
        }       
      }),
      catchError((error: HttpErrorResponse) => {
        this.utils.removeLocalStorage("showLoader")
        // this.loaderService.httpLoaderHide()
        return throwError(error);
    })  
      )};  
    }
}
