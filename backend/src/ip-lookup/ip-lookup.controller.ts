import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { IpLookupService } from './ip-lookup.service';
import { IpLocationResponseDto } from './dto/ip-location.response.dto';

@Controller('api/ip-lookup')
export class IpLookupController {
  constructor(private readonly ipLookupService: IpLookupService) {}

  @Get('/location/:ip')
  async findLocation(@Param('ip') ip): Promise<IpLocationResponseDto> {
    return await this.ipLookupService.getLocation(ip);
  }

  @Get('/health')
  async getApiHealths() {
    const apiStatus = await this.ipLookupService.getApiHealths();
    return apiStatus;
  }

  @Get('/health/:apiName')
  async getApiHealth(@Param('apiName') apiName: string) {
    const apiStatus = await this.ipLookupService.getApiHealth(apiName);
    return apiStatus;
  }
}
