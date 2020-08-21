// 文件拓展实体
/**
 * 文件传输实体
 */
export class FileDto {
    /**
     * 文件ID
     */
    objectId: string;
    /**
     * 文件名
     */
    fileName: string;
    /**
     * 文件路径
     */
    fileUrl: string;
    /**
     * 文件base64值
     */
    base64String: string;
}
