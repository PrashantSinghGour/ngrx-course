import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { isLoggedIn } from "./auth.selectors";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(
      select(isLoggedIn),
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl(
            '/login'
          );
        }
      })
    );
  }
}
