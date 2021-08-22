export type Pagination = {
  current: number,
  pageSize: number,
  total: number,
  showSizeChanger: boolean,
  pageSizeOptions: Array<number>
}

export enum ExportType {
  All = 'all',
  Current = 'current'
}
