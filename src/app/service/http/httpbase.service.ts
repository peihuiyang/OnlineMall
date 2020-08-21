import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TokenAdmin } from '../../entity/Common/ResponseResult.entity';
import { Constants } from '../../entity/Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class HttpbaseService {
  private http: any;
  token: TokenAdmin;
  constructor(public Http: HttpClient) {
    this.http = Http;
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
  }
  /**
   * Get方法
   * @param url api路径
   * @param options 请求头
   * @param params 参数
   */
  // get方法
  public get(url: string, params?: object): Observable<{}> {
    const getheader = new HttpHeaders({
      'Content-Type': 'text/plain',
      'Authorization': this.token.token
    });
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    return this.http.get(url, { headers: getheader, params: httpParams }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  /**
   * Post请求
   * @param url 请求路径
   * @param data 数据
   */
  public post(url: string, data = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token.token
      })
    };
    return this.http.post(url, data, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  /**
   * Post请求拓展
   * @param url 路径
   * @param contenttype 参数格式
   * @param data 参数值
   */
  public spost(url: string, data = {}, contenttype = 'text/plain'): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': contenttype,
        'Authorization': this.token.token
      })
    };
    return this.http.post(url, data, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  /**
   * 提取数据
   * @param res 返回结果
   */
  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }
  /**
   * 错误消息类
   * @param error 错误
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('错误消息:', error.error.message);
    } else {
      console.error(
        `返回错误代码 ${error.status}, ` + `信息: ${error.error}`
      );
    }
    return throwError(error.error.message);
  }
}
