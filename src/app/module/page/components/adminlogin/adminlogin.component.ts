import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

// 引入实体
import { AdminLoginInput, AdminContext } from '../../../../entity/Entity/AdminExtend.entity';
import { ResponseResult } from '../../../../entity/Common/ResponseResult.entity';
import { ApiUrl, Constants } from '../../../../entity/Constant/constant';
import { TitleConstant } from '../../../../entity/Constant/titleConstant';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.less']
})
export class AdminloginComponent implements OnInit {
  code = '';
  checkCode = '';
  // 登录按钮加载状态
  subLoading = false;
  // isSpinning = false;
  // 输入框变量
  /**
   *  @param user 账号
   */
  user = '';
  /**
   *  @param password 密码
   */
  password = '';
  /**
   *  @param verification 输入的验证码
   */
  verification = '';
  // 定义实体
  public adminLoginInput = new AdminLoginInput();
  constructor(private message: NzMessageService, public router: Router, private http: HttpClient, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(TitleConstant.DefaultTitle);
    this.createCode();
  }
  /**
   * 登录函数
   */
  adminLogin(): void {
    this.subLoading = true;
    // this.isSpinning = true;
    const state = this.verificationCode() && this.checkUser() && this.checkPassword();
    if (state){
      this.toLogin();
    }
    else{
      setTimeout(() =>  {
        this.subLoading = false;
        // this.isSpinning = false;
        this.createCode();
      }, 2000);
    }
  }
  // 生成验证码
  createCode(): void{
    this.code = '';
    const codeLength = 4; // 验证码的长度
    const random = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' , 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                           'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); // 随机数
    for (let i = 0; i < codeLength; i++) {// 循环操作
      const index = Math.floor(Math.random() * 36); // 取得随机数的索引（0~35）
      this.code += random[index]; // 根据索引取得随机数加到code上
    }
    this.checkCode = this.code; // 把code值赋给验证码
  }
  // 校验验证码
  verificationCode(): boolean {
    // 验证码为空
    if (this.verification.length < 1){
      this.message.warning('请输入验证码');
      this.subLoading = false;
      return false;
    }
    // 验证码出错
    else if (this.verification.toUpperCase() !== this.checkCode){
      this.message.error('验证码出错');
      this.subLoading = false;
      return false;
    }
    else {
      return true;
    }
  }
  /**
   * 数据检查
   */
  checkUser(): boolean {
    if (this.user.length < 1){
      this.message.warning('账号不能为空');
      return false;
    }
    else {
      return true;
    }
  }
  checkPassword(): boolean {
    if (this.password.length < 6){
      this.message.warning('密码长度不能小于6位');
      return false;
    }
    else {
      return true;
    }
  }
  toLogin(): void {
    this.adminLoginInput.code = this.user;
    this.adminLoginInput.adminPwd = this.password;
    const url = ApiUrl.AdminLogin;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(url, this.adminLoginInput, httpOptions).subscribe((respon: ResponseResult<AdminContext>) => {
        // console.log(respon);
        this.message.success(respon.message);
        // 将登录信息存在缓存里
        window.localStorage.setItem(Constants.AdminToken, JSON.stringify(respon.data));
        // 跳转
        this.router.navigate(['/admin/index']);
    }, error => {
      this.subLoading = false;
      this.message.error(error.error.message);
    });
  }
}
