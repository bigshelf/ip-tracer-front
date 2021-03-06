import { Inject, Injectable } from '@nestjs/common';
import { IpLocationApiConfig } from '../config/api/ip-location-api.config';
import { LookupGeolocationApi } from './lookup-geolocation-api';
import { LookupIpApi } from './lookup-ip-api';
import { LookupStackApi } from './lookup-stack-api';
import { LookupApi } from './lookup-api';
import { CanNotExecuteAPIException } from './error/CanNotExecuteAPIException';
import { IpLocationResponseDto } from '../ip-lookup/dto/ip-location.response.dto';

@Injectable()
export class LookupApiService {
  private readonly findLocationIterator: Generator<LookupApi, null, unknown>;
  constructor(
    private readonly lookupIpApi: LookupIpApi,
    private readonly lookupGeolocationApi: LookupGeolocationApi,
    private readonly lookupStackApi: LookupStackApi,
  ) {
    this.findLocationIterator = this.findLocationGenerator();
  }

  private *findLocationGenerator() {
    while (true) {
      yield this.lookupGeolocationApi;
      yield this.lookupIpApi;
      yield this.lookupStackApi;
    }

    return null;
  }

  async findLocation(ip: string): Promise<IpLocationResponseDto> {
    const { value: lookupApi } = this.findLocationIterator.next();

    if (!(await lookupApi.canLookup())) {
      throw new CanNotExecuteAPIException('can not execute external api');
    }

    const response = await lookupApi.lookup(ip);

    return response;
  }
}
