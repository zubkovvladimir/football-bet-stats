export type SortDirection = 'ascend' | 'descend';

export interface PageSorter {
  sort: string;
  dir: SortDirection;
}

export interface ParamsFetchAll {
  page?: number;
  pageSize?: number;
  sort?: string;
  sortBy?: string;
  search?: string;
}

export interface PageMeta {
  currentPage: number;
  lastPage: number;
  pageSize: number;
  total: number;
}

export interface IEmptyResponse {
  errorMessage?: string;
  success?: boolean;
}

export interface IResponse<T> {
  success?: boolean;
  errorMessage?: string;
  data?: T;
}

export interface ReturnFetchAll<T> {
  meta: PageMeta;
  items: T[];
}

export interface IResponseWithMeta<T> {
  errorMessage?: string;
  data?: ReturnFetchAll<T>;
}

export type ApiResponse<T> = Promise<IResponse<T>>;

export type ApiEmptyResponse = Promise<IEmptyResponse>;

export type ApiResponseWithMeta<T> = Promise<IResponseWithMeta<T>>;
