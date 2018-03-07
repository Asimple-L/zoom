/**
 * Created by Asimple on 2018/3/4.
 */
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';


export class SearchKeyGuard implements CanActivate {
  canActivate( route: ActivatedRouteSnapshot ) {
    const str = route.queryParams['search'];
    console.log(typeof str);
    if ( str == '' ||  str == 'undefined' ) {
      return false;
    } else {
      return true;
    }
  }
}
