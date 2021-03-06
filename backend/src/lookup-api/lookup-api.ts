import { IpLocationResponseDto } from '../ip-lookup/dto/ip-location.response.dto';

export interface LookupApi {
  canLookup(): Promise<boolean>;
  lookup(ip: string): Promise<IpLocationResponseDto>;
  setErrorStatus(): void;
  setUsageExceedStatus(): void;
  setOkStatus(): void;
}
