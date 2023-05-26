import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  private userData: any;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.userData$.subscribe(
      (data) => this.userData = data
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.authService.isAuthenticated();


    if(!isAuthenticated){
      this.router.navigate(['/login']);
      return false;
    }

    if(this.userData != null){
      const userRoles: string[] = this.userData['roles'];
      const routeRole: string = next.data['role'];

      if(routeRole != null){
        if(userRoles.includes(routeRole)){
          return true;
        }
        return false;
      }
    }

    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if(!isAuthenticated){
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
