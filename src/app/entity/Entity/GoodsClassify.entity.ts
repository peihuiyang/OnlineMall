// 商品分类实体类
/**
 * 新增
 */
export class GCCreateInput{
    /**
     * @param code 编码
     */
    code: string;
    /**
     * @param gcName 名称
     */
    gcName: string;
    /**
     * @param parentId 父级ID
     */
    parentId: string;
    /**
     * @param parentName 父级名称
     */
    parentName: string;
    /**
     * @param isRoot 是否根类
     */
    isRoot: boolean;
    /**
     * @param isEnable 禁用启用
     */
    isEnable: boolean;
    /**
     * @param sort 排序
     */
    sort: number;
}
export class GCModifyInput{
    /**
     * @param bizId 标识
     */
    bizId: string;
    /**
     * @param gcName 名称
     */
    gcName: string;
    /**
     * @param parentId 父级ID
     */
    parentId: string;
    /**
     * @param parentName 父级名称
     */
    parentName: string;
    /**
     * @param isRoot 是否根类
     */
    isRoot: boolean;
    /**
     * @param isEnable 禁用启用
     */
    isEnable: boolean;
    /**
     * @param sort 排序
     */
    sort: number;
    /**
     * @param version 数据版本
     */
    version: number;
}
export class GoodsClassifyDto{
    /**
     * @param bizId 标识
     */
    bizId: string;
    /**
     * 编码
     */
    code: string;
    /**
     * @param gcName 名称
     */
    gcName: string;
    /**
     * @param parentId 父级ID
     */
    parentId: string;
    /**
     * @param parentName 父级名称
     */
    parentName: string;
    /**
     * @param isRoot 是否根类
     */
    isRoot: boolean;
    /**
     * @param isRoot_DName 是否根类
     */
    // tslint:disable-next-line: variable-name
    isRoot_DName: string;
    /**
     * @param isEnable 禁用启用
     */
    isEnable: boolean;
    /**
     * @param isEnable_DName 禁用启用
     */
    // tslint:disable-next-line: variable-name
    isEnable_DName: string;
    /**
     * @param sort 排序
     */
    sort: number;
    /**
     * @param version 数据版本
     */
    version: number;
    /**
     * @param createdBy 创建人
     */
    createdBy: string;
    /**
     * @param createdTime 创建时间
     */
    createdTime: Date;
    /**
     * @param modifyBy 创建人
     */
    modifyBy: string;
    /**
     * @param modifyTime 修改时间
     */
    modifyTime: Date;
}
/**
 * 禁启用
 */
export class GCEnableInput {
    /**
     * @param bizId 标识
     */
    bizId: string;
    /**
     * @param isEnable 启用禁用
     */
    isEnable: boolean;
}
/**
 * 删除
 */
export class GCDeleteInput {
    /**
     * @param bizId 标识
     */
    bizId: string;
}

