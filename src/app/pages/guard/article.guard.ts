import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';

/**
 * Created by Asimple on 2018/3/8.
 */

export class ArticleGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot) {
    const info = route.queryParams['article'];
    if ( info == '' || info == 'undefined' ) {
      return false;
    } else {
      return true;
    }
  }
}
