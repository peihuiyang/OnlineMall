/**
 * Api路径常量
 */
export class ApiUrl {
    /**
     * 管理员登录
     */
    static AdminLogin = '/api/eshop/v1/admin/login';
    /**
     * 修改密码
     */
    static AdminModifyPwd = '/api/eshop/v1/admin/modifypwd';
    /**
     * 退出登录
     */
    static AdminLoginOut = '/api/eshop/v1/admin/loginout';
    /**
     * 新增
     */
    static AdminCreate = '/api/eshop/v1/admin/create';
    /**
     * 查询
     */
    static AdminSearch = '/api/eshop/v1/admin/search';
    /**
     * 修改
     */
    static AdminModify = '/api/eshop/v1/admin/modify';
    /**
     * 禁启用
     */
    static AdminEnable = '/api/eshop/v1/admin/enable';
    /**
     * 删除
     */
    static AdminDelete = '/api/eshop/v1/admin/delete';
    // 商品分类
    /**
     * 新增
     */
    static GoodscCreate = '/api/eshop/v1/goodsclassify/create';
    /**
     * 修改
     */
    static GoodscModify = '/api/eshop/v1/goodsclassify/modify';
    /**
     * 查询
     */
    static GoodscSearch = '/api/eshop/v1/goodsclassify/search';
    /**
     * 禁启用
     */
    static GoodscEnable = '/api/eshop/v1/goodsclassify/enable';
    /**
     * 删除
     */
    static GoodscDelete = '/api/eshop/v1/goodsclassify/delete';
    // 文件操作
    /**
     * 获取图片
     */
    static ReadImage = '/api/basics/v1/upload/readimage';
    /**
     * 删除图片
     */
    static DeleteFile = '/api/basics/v1/upload/deletecache';
    /**
     * 上传图片
     */
    static UploadFile = '/api/basics/v1/upload/uploadcache';
}
/**
 * 页面路径
 */
export class PageUrl {
    /**
     * 管理员登录
     */
    static GoodsCreate = '/goods/create';
}
/**
 * 常量值
 */
export class Constants {
    /**
     * 管理员token
     */
    static AdminToken = 'admintoken';
    /**
     * 商品分类修改数据
     */
    static GCModify = 'gcmodify';
    /**
     * 文件列表
     */
    static FileList = 'filelist';
    /**
     * 文件列表
     */
    static FileListTemp = 'filelisttemp';
    /**
     * 选中的文件
     */
    static SelectFile = 'selectfile';
}
