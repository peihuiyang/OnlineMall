/**
 * 返回数据实体
 */
export class ResponseAnyResult {
    data: any;
    status: number;
    message: string;
}
export class ResponseResult<T> {
    data: T;
    status: number;
    message: string;
}
/**
 * 返回数据实体列表
 */
export class ResponseResults<T> {
    data: DataList<T>;
    status: number;
    message: string;
}
export class DataList<T> {
    dataList: T[];
    totalCount: number;
}
/**
 * 返回的Token
 */
export class TokenAdmin {
    bizId: string;
    code: string;
    name: string;
    otherMsg: string;
    token: string;
}
