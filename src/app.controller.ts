import { Controller, Get, Param, Inject } from '@nestjs/common';
import { KakaoMapService } from './app.service';

@Controller('places')
export class PlacesController {
  constructor(
    @Inject(KakaoMapService)
    private readonly kakaoMapService: KakaoMapService,
  ) {}

  @Get('/:query')
  async searchPlaces(@Param('query') query: string): Promise<any> {
    const result = await this.kakaoMapService.searchPlaces(query);
    // 여기서 결과를 처리하거나 필요한 로직을 추가하세요.
    return result;
  }
}
