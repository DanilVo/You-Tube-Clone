import axios from "axios";
import appConfig from "../Utils/AppConfig";
class YouTobeService {
  public async getVideos(url: string) {
    const options = {
      params: {
        maxResults: 50,
      },
      headers: {
        "X-RapidAPI-Key": "45f67ff11dmshb9159dcbe37c0ecp1b0068jsna0e855c575e8",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    const { data } = await axios.get(`${appConfig.BASE_URL}/${url}`, options);
    return data.items;
  }
}

const youTobeService = new YouTobeService()

export default youTobeService