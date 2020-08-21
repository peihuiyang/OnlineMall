import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpbaseService } from '../../../../service/http/httpbase.service';
import { MsgnoticeService } from '../../../../service/notice/msgnotice.service';
import { UploadFile, NzUploadFile } from 'ng-zorro-antd';
import { TokenAdmin, ResponseResult } from '../../../../entity/Common/ResponseResult.entity';
import { Constants, ApiUrl } from '../../../../entity/Constant/constant';
import { FileDto } from '../../../../entity/Entity/FileExtend.entity';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  uploadURL = ApiUrl.UploadFile;
  loading = false;
  previewImage: string | undefined = '';
  previewVisible = false;
  // 请求头数据
  token: TokenAdmin;
  headers: any;
  fileList: NzUploadFile[] = [];
  fileListData: FileDto[] = [];
  constructor(private message: MsgnoticeService, private http: HttpbaseService) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
    this.headers = {
      Authorization: this.token.token
    };
    this.fileListData = JSON.parse(window.localStorage.getItem(Constants.FileList));
    this.fileList = JSON.parse(window.localStorage.getItem(Constants.FileListTemp));
    if (this.fileListData === null){
      this.fileListData = [];
    }
    if (this.fileList === null){
      this.fileList = [];
    }
    console.log(this.fileListData);
    console.log(this.fileList);
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
  /**
   * 预览
   * @param file 文件
   */
  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  }
  /**
   * 文件上传变化
   * @param info 文件信息
   */
  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.loading = false;
        let rospon = new ResponseResult<FileDto>();
        rospon = info.file.response;
        this.fileListData.push(rospon.data);
        this.message.Success(rospon.message);
        window.localStorage.setItem(Constants.FileList, JSON.stringify(this.fileListData));
        window.localStorage.setItem(Constants.FileListTemp, JSON.stringify(this.fileList));
        console.log(this.fileList);
        break;
      case 'error':
        this.message.Error('网络错误');
        this.loading = false;
        break;
    }
  }
  /**
   * 点击删除响应事件
   * @param file 文件
   */
  handleRemove = async (file: NzUploadFile) => {
    let respon = new ResponseResult<FileDto>();
    window.localStorage.setItem(Constants.SelectFile, JSON.stringify(file));
    respon = file.response;
    this.DeleteImage(respon.data.objectId);
    // console.log(respon);
    // console.log(this.fileList);
    // this.fileList = this.fileList.filter(this.findFile);
    // this.fileListData = this.fileListData.filter(this.findFileData);
    // console.log(this.fileList);
    // console.log(this.fileListData);
  }
  /**
   * 删除图片
   * @param objectid 图片ID
   */
  DeleteImage(objectid: string): void {
    this.http.spost(ApiUrl.DeleteFile, objectid).subscribe((response: ResponseResult<FileDto>) => {
      console.log(response);
      if (response.status === -1){
        this.message.Error(response.message);
      }
      else{
        this.message.Success(response.message);
        this.fileList = this.fileList.filter(this.findFile);
        this.fileListData = this.fileListData.filter(this.findFileData);
        window.localStorage.setItem(Constants.FileList, JSON.stringify(this.fileListData));
        window.localStorage.setItem(Constants.FileListTemp, JSON.stringify(this.fileList));
        window.localStorage.removeItem(Constants.SelectFile);
      }
    });
  }
  // 设置预览文件过滤条件
  findFile(element: NzUploadFile, index, array): NzUploadFile {
    const selectFile = JSON.parse(window.localStorage.getItem(Constants.SelectFile));
    if (element.uid !== selectFile.uid){
      return element;
    }
  }
  findFileData(element: FileDto, index, array): FileDto {
    const selectFile = JSON.parse(window.localStorage.getItem(Constants.SelectFile));
    if (element.objectId !== selectFile.response.data.objectId){
      return element;
    }
  }
  /**
   * 根据ID获取文件数据
   * @param objectId 文件ID
   */
  GetFileDataById(objectId: string): void {
    this.http.get(ApiUrl.ReadImage, {'objectid': objectId}).subscribe((response: ResponseResult<FileDto>) => {
      console.log(response.data);
      // this.fileList.push(response.data);
      console.log(this.fileList);
    });
    // return response.data;
  }
}

/**
 * 获取base64
 * @param file 文件
 */
function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
