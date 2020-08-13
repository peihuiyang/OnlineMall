/**
 * 管理员登录实体
 */
export class AdminLoginInput {
    /**
     * @param code 账号
     */
    code: string;
    /**
     * @param adminPwd 密码
     */
    adminPwd: string;
}
/**
 * 管理员登录信息
 */
export class AdminContext {
    /**
     * @param bizId 标识
     */
    bizId: string;
    /**
     * @param code 账号
     */
    code: string;
    /**
     * @param name 名称
     */
    name: string;
    /**
     * @param num 权限
     */
    num: number;
    /**
     * @param token token
     */
    token: string;
}
/**
 * 修改密码
 */
export class AdminPwdInput {
    /**
     * @param bizId 账号
     */
    bizId: string;
    /**
     * @param adminPwd 密码
     */
    adminPwd: string;
    /**
     * @param adminNewPwd 新密码
     */
    adminNewPwd: string;
}
/**
 * 新增
 */
export class AdminCreateInput {
    /**
     * @param code 账号
     */
    code: string;
    /**
     * @param name 名称
     */
    name: string;
    /**
     * @param adminPwd 密码
     */
    adminPwd: string;
    /**
     * @param dept 部门
     */
    dept: string;
    /**
     * @param duty 职责
     */
    duty: string;
    /**
     * @param jurisdiction 权限
     */
    jurisdiction: number;
    /**
     * @param isEnable 启用禁用
     */
    isEnable: boolean;
}
/**
 * 修改
 */
export class AdminModifyInput {
    /**
     * @param bizId 标识
     */
    bizId: string;
    /**
     * @param name 名称
     */
    name: string;
    /**
     * @param adminPwd 密码
     */
    adminPwd: string;
    /**
     * @param dept 部门
     */
    dept: string;
    /**
     * @param duty 职责
     */
    duty: string;
    /**
     * @param jurisdiction 权限
     */
    jurisdiction: number;
    /**
     * @param isEnable 启用禁用
     */
    isEnable: boolean;
}
/**
 * 禁启用
 */
export class AdminEnableInput {
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
export class AdminDeleteInput {
    /**
     * @param bizId 标识
     */
    bizId: string;
}
/**
 * Dto
 */
export class AdminDto {
    /**
     * @param bizId 标识
     */
    bizId: string;
    /**
     * @param code 账号
     */
    code: string;
    /**
     * @param name 名称
     */
    name: string;
    /**
     * @param dept 部门
     */
    dept: string;
    /**
     * @param duty 职责
     */
    duty: string;
    /**
     * @param jurisdiction 权限
     */
    jurisdiction: number;
    /**
     * @param isEnable 启用禁用
     */
    isEnable: boolean;
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

