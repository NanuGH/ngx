export interface ApiResponse<T> {
  status: boolean;
  statusText: string;
  details?: T[];
  timeStamp: string;
}
