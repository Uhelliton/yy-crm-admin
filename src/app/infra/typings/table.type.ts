import {PublicModel} from "src/app/domains/public/models/public.model";

export type Pagination = {
  current: number
  pageSize: number
  total: number
  showSizeChanger: boolean
  pageSizeOptions: Array<number>
}

export enum ExportType {
  All = 'all',
  Current = 'current'
}

export type DataTableThead = {
  name: string
  label: string
  field: string
  align?: 'left' | 'right'
  sortable?: boolean
}

export type DatatablePagination = {
  perPage: number,
  total: number
}

export type DataTable<T = any> = {
  search: string
  loading: boolean
  thead: Array<DataTableThead>
  rows: Array<T>
  pagination: Partial<DatatablePagination>
}
