import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KakaoMapService {
  private readonly API_KEY = 'e84edcba09907dc19727de566a994a88';

  async searchPlaces(query: string): Promise<any> {
    const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}`;
    console.log(url);
    const response = await axios.get(url, {
      headers: {
        Authorization: 'KakaoAK ' + 'e84edcba09907dc19727de566a994a88',
      },
    });
    return response.data;
  }
}
