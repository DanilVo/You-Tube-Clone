import { useParams } from 'react-router-dom';
import './ChannelDetails.css';
import { useEffect, useState } from 'react';
import youTobeService from '../../Service/YoutobeService';
import ChannelDetailModel from '../../Models/ChannelDetailModel';
import VideoCardModel from '../../Models/VideoCardModel';
import VideoCard from '../VideoCard/VideoCard';

function ChannelDetails(): JSX.Element {
  const [channelDetail, setChannelDetail] = useState<ChannelDetailModel>();
  const [videos, setVideos] = useState<VideoCardModel[]>([]);

  const param = useParams();
  const path = param.path;

  useEffect(() => {
    //channel information
    youTobeService
      .getVideos(`channels?part=snippet&id=${path}`)
      .then((data) => setChannelDetail(data[0]));

    //channel videos
    youTobeService
      .getVideos(`search?channelId=${path}&part=snippet%2Cid&order=date`)
      .then((data) => setVideos(data));
  }, [path]);

  return (
    <div className="ChannelDetails">
      <div className="banner">
        <img
          src={channelDetail?.snippet.thumbnails.high.url}
          alt={channelDetail?.snippet.title}
        />
        {channelDetail?.snippet.title}
        <span style={{color: '#362f2f'}}>
          {parseInt(channelDetail?.statistics.subscriberCount).toLocaleString()}
        </span>
      </div>
      {videos?.map((item, idx) => (
        <div className="cards">
          <VideoCard video={item} />
        </div>
      ))}
    </div>
  );
}

export default ChannelDetails;
