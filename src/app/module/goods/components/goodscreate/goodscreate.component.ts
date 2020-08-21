import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpbaseService } from '../../../../service/http/httpbase.service';
import { MsgnoticeService } from '../../../../service/notice/msgnotice.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { TitleConstant, TitlePage } from '../../../../entity/Constant/titleConstant';

@Component({
  selector: 'app-goodscreate',
  templateUrl: './goodscreate.component.html',
  styleUrls: ['./goodscreate.component.less']
})
export class GoodscreateComponent implements OnInit {
  // 侧边栏折叠标识
  isCollapsed = false;
  form1!: FormGroup;
  formStock: 'A';
  current = 0;
  onIndexChange(event: number): void {
    this.current = event;
    console.log(event);
  }
  constructor(private titleService: Title, private http: HttpbaseService, private message: MsgnoticeService, private fb: FormBuilder) {
    this.form1 = this.fb.group({
      formName: [null, [Validators.required]],
      formClassify: [null, [Validators.required]],
      formStock: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(TitleConstant.GoodsCreateTitle);
  }
  // 折叠函数
  runCollapsed(state: boolean): void {
    this.isCollapsed = state;
  }
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    console.log('done');
  }
}
