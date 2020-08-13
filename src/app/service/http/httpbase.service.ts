import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpbaseService {
  private http: any;
  constructor(public Http: HttpClient) {
    this.http = Http;
  }
  /**
   * Get方法
   * @param url api路径
   * @param options 请求头
   * @param params 参数
   */
  // get方法
  public get(url: string, options?: object, params?: object): Observable<{}> {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    return this.http.get(url, { headers: options, params: httpParams }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  /**
   * POST请求处理（一般用于保存数据）
   * @param url 后台接口api
   * @param data 参数
   */
  public post(url: string, data = {}, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
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
