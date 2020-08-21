import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyrouteService {

  constructor(public router: Router) { }
  /**
   * 路由重定向
   * @param url 路径值
   */
  Redirect(url: any): void {
    this.router.navigate([url]);
  }
}
