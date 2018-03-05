/**
 * Created by Asimple on 2018/3/4.
 */
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';


export class SearchGuard implements CanActivate {
  canActivate( route: ActivatedRouteSnapshot ) {
    const str = route.queryParams['url'];
    if ( str == '' ||  str == 'undefined' ) {
      return false;
    } else {
      return true;
    }
  }
}
