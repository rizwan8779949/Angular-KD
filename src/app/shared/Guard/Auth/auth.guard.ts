import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem("userData")) {
            this.router.navigateByUrl("/dashboard");
            return false;
        } else {
            return true;
        }
    }
}
export class LoginGuardFailed implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!localStorage.getItem("authData")) {
            return true;
        } else {
            this.router.navigateByUrl("/dashboard");
        }
    }
}
export class LoginGuardSuccess implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem("authData")) {
            return true;
        } else {
            this.router.navigateByUrl("/auth");
        }
    }
}
