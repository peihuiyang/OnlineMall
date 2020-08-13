import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpbaseService } from '../../../../service/http/httpbase.service';
import { AdminPwdInput } from '../../../../entity/Entity/AdminExtend.entity';
import { ApiUrl, Constants } from '../../../../entity/Constant/constant';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ResponseResult, TokenAdmin } from '../../../../entity/Common/ResponseResult.entity';
import { Router} from '@angular/router';


@Component({
  selector: 'app-rightheader',
  templateUrl: './rightheader.component.html',
  styleUrls: ['./rightheader.component.less']
})
export class RightheaderComponent implements OnInit {
  // 定义
  projectName = '微距商城后台管理(picsay)';
  public token: TokenAdmin;
  userName = '用户名';
  inputDefault = '搜一下';
  badgeCount = 100;
  // 修改密码模态框变量
  isPwdVisible = false;
  isPwdLoading = false;
  oldPassword = '';
  newPassword = '';
  newPassword1 = '';
  public passwordInput = new AdminPwdInput();
  constructor(private message: NzMessageService, private http: HttpClient, public router: Router) {
  }

  ngOnInit(): void {
    // 获取Token
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
    if (this.token.name !== null) {
      this.userName = this.token.name;
    }
  }
  onSearch(): void {
    const id = this.message.loading('正在加载搜索数据', { nzDuration: 0 }).messageId;
    setTimeout(() => {
      this.message.remove(id);
    }, 2500);
  }
  // 修改密码模态框
  showPwdModal(): void {
    this.isPwdVisible = true;
  }
  // 确认修改
  handleModifyPwd(): void {
    console.log(this.token.bizId);
    this.isPwdLoading = true;
    this.passwordInput.bizId = this.token.bizId;
    this.passwordInput.adminPwd = this.oldPassword;
    this.passwordInput.adminNewPwd = this.newPassword;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token.token
      })
    };
    this.http.post(ApiUrl.AdminModifyPwd, this.passwordInput, httpOptions)
    .subscribe((response: ResponseResult<string>) => {
      console.log(response);
      this.isPwdVisible = false;
      this.isPwdLoading = false;
      this.message.success(response.message);
    },
    error => {
      this.isPwdVisible = false;
      this.isPwdLoading = false;
      this.message.error(error.error.message);
      // console.log(error);
    });
  }

  handleCancel(): void {
    this.isPwdVisible = false;
  }
  // 检查
  checkPassword(event: any): void{
    if (event.target.value.length < 6){
      this.message.warning('密码长度不能小于6位');
    }
    else{
      switch (event.target.id){
        case 'checkPwd':
          this.oldPassword = event.target.value;
          break;
        case 'checkNewPwd':
          this.newPassword = event.target.value;
          break;
        case 'checkNewPwd1':
          this.newPassword1 = event.target.value;
          if (this.newPassword !== this.newPassword1){
            this.message.warning('两次密码不一致');
          }
          break;
      }
    }
  }
  // 推出登录
  loginOut(): void{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain',
        'Authorization': this.token.token
      })
    };
    this.http.get(ApiUrl.AdminLoginOut, httpOptions).subscribe((response: ResponseResult<string>) => {
      this.message.success(response.message);
      window.localStorage.clear();
      this.router.navigate(['/admin/login']);
    },
    error => {
      this.message.error(error.error.message);
    });
  }
}
