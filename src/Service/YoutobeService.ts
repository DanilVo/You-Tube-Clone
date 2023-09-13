import axios from "axios";
import appConfig from "../Utils/AppConfig";
import VideoCardModel from "../Models/VideoCardModel";
import VideoDataModel from "../Models/VideoDataModel";
import ChannelDetailModel from "../Models/ChannelDetailModel";

class YouTobeService {
  options = {
    params: {
      maxResults: 50,
    },
    headers: {
      "X-RapidAPI-Key": "45f67ff11dmshb9159dcbe37c0ecp1b0068jsna0e855c575e8",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  public async getVideos(url: string): Promise<VideoCardModel[]> {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}/${url}`,
      this.options
    );
    return data.items;
  }

  public async getChannelData(url: string): Promise<ChannelDetailModel[]> {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}${appConfig.CHANNEL_DATA_URL}${url}`,
      this.options
    );
    return data.items;
  }

  public async getVideosFromChannelId(url: string): Promise<VideoCardModel[]> {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}/search?channelId=${url}&part=snippet%2Cid&order=date`,
      this.options
    );
    return data.items;
  }

  public async getRelatedVideosFromVideo(
    url: string
  ): Promise<VideoCardModel[]> {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}/search?part=snippet&relatedToVideoId=${url}&type=video`,
      this.options
    );
    return data.items;
  }

  public async getSearchVideos(url: string): Promise<VideoCardModel[]> {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}${appConfig.SEARCH_URL}${url}`,
      this.options
    );
    return data.items;
  }

  public async getStatistics(url: string): Promise<VideoDataModel[]> {
    const { data } = await axios.get(
      `${appConfig.BASE_URL}${appConfig.STATISTICS_URL}${url}`,
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
