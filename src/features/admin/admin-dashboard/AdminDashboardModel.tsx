export interface ListProfilesRequest {
  search: string;
  page: number;
  pageSize: number;
}

export interface Profile {
  id: number;
  name: string;
  email: string;
  noHp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalRows: number;
  totalPages: number;
}

export interface ListProfilesResponse {
  data: PaginatedResponse<Profile>;
}
