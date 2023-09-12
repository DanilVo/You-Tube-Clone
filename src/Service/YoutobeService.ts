import axios from 'axios';
import appConfig from '../Utils/AppConfig';
import { wait } from '@testing-library/user-event/dist/utils';

class YouTobeService {
  options = {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': '45f67ff11dmshb9159dcbe37c0ecp1b0068jsna0e855c575e8',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };
  public async getVideos(url: string): Promise<any[]> {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}/${url}`,
      this.options
    );
    return data.items;
  }

  public async getStatistics(url: string) {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}/videos?part=snippet,statistics&id=${url}`,
      this.options
    );
    return data.items;
  }

  public async getSearchVideos(url: string) {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}/search?part=snippet&q=${url}`,
      this.options
    );
    return data.items;
  }
}

const youTobeService = new YouTobeService();

export default youTobeService;

//channels?part=snippet&id=
//search?part=snippet&q=//
//search?channelId=${path}&part=snippet%2Cid&order=date
//videos?part=snippet,statistics&id=//
