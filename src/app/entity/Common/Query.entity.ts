export class SearchInput {
    queryFilter: FilterEntity[];
    sortList: MongoSortEntity[];
    pageIndex: number;
    pageSize: number;
}
export class FilterEntity {
    fieldName: string;
    operator: string;
    fieldValue: any;
}
export class MongoSortEntity {
    sortField: string;
    sortValue: number;
}
