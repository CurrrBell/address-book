import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/responsive-service/responsive.service';


@Injectable({
  providedIn: 'root'
})
export class MobileGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private readonly responsiveService: ResponsiveService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.responsiveService.isMobile()) {
      return true;
    }

    return false;
  }
}
