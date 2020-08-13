import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class MsgnoticeService {

  constructor(private message: NzMessageService) { }
  /**
   * 成功
   * @param msg 消息
   */
  public Success(msg: string): void{
    this.message.success(msg);
  }
  /**
   * 警告
   * @param msg 消息
   */
  public Warn(msg: string): void{
    this.message.warning(msg);
  }
  /**
   * 通知
   * @param msg 消息
   */
  public Info(msg: string): void{
    this.message.info(msg);
  }
  /**
   * 错误
   * @param msg 消息
   */
  public Error(msg: string): void{
    this.message.error(msg);
  }
  /**
   * 加载
   * @param msg 消息
   */
  public Load(msg: string): void{
    this.message.loading(msg);
  }
}
