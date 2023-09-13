class AppConfig {
  public readonly BASE_URL: string = "https://youtube-v31.p.rapidapi.com";

  public readonly SEARCH_URL: string = "/search?part=snippet&q=";
  public readonly STATISTICS_URL: string =
    "/videos?part=snippet,statistics&id=";
  public readonly CHANNEL_DATA_URL: string = "/channels?part=snippet&id=";
}

const appConfig = new AppConfig();

export default appConfig;
