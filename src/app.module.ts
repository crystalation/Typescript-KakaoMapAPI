import { Module } from '@nestjs/common';
import { KakaoMapService } from './app.service';
import { PlacesController } from './app.controller';

@Module({
  providers: [KakaoMapService],
  controllers: [PlacesController],
})
export class AppModule {}
