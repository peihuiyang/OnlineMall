import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UploadFile, NzUploadFile } from 'ng-zorro-antd';
import { MsgnoticeService } from '../../../../service/notice/msgnotice.service';

import { FileDto } from '../../../../entity/Entity/FileExtend.entity';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.less']
})
export class ShowimageComponent implements OnInit {
  loading = false;
  previewImage: string | undefined = '';
  previewVisible = false;
  avatarUrl: string;
  showUrl1: string;
  // 请求头数据
  headers: any;
  fileList: FileDto[] = [];
  fileListData: NzUploadFile[] = [];
  // 微缩图展示标志
  showState = false;
  // hover元素标志
  hoverState = false;
  // 图片放大显示标志
  enlargeState = false;
  constructor(private message: MsgnoticeService) { }

  ngOnInit(): void {
  }
  /**
   * 上传前检查
   * @param file 文件
   */
  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      // 检查格式
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
      if (!isJPG) {
        this.message.Warn('只能上传jpg或者png格式');
        observer.complete();
        return;
      }
      // 检查内存大小
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.message.Warn('图片不能大于10M');
        observer.complete();
        return;
      }
      // 检查长宽
      this.checkImageDimension(file).then(dimensionRes => {
        if (!dimensionRes) {
          this.message.Warn('图片至少为300*200');
          observer.complete();
          return;
        }
        observer.next(isJPG && isLt10M && dimensionRes);
        observer.complete();
      });
    });
  }
  /**
   * 检查文件大小
   * @param file 文件
   */
  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image(); // create image
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        resolve(width >= 300 && width >= 200);
      };
    });
  }
  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.loading = false;
        console.log(info.file.response);
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }
  // 覆盖元素触发事件
  HoverImage(objectid: string): void {
    console.log(objectid);
    this.hoverState = true;
  }
  LeaveHover(objectid: string): void {
    this.hoverState = false;
  }
  // 展示图片
  ShowImage(imageUrl: string): void {
    this.enlargeState = true;
    this.showUrl1 = imageUrl;
  }
  // 还原放大图片
  ShowCancel(): void {
    this.enlargeState = false;
  }
  // 删除图片
  DeleteImage(objectid: string): void {
  }
}
