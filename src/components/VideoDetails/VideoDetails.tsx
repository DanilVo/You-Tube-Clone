import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import VideoDataModel from '../../Models/VideoDataModel';
import youTobeService from '../../Service/YoutobeService';
import './VideoDetails.css';
import VideoCardModel from '../../Models/VideoCardModel';
import VideoCard from '../VideoCard/VideoCard';

function VideoDetails(): JSX.Element {
  const { path } = useParams();

  const [videoData, setVideoData] = useState<VideoDataModel>();
  const [videos, setVideos] = useState<VideoCardModel[]>();

  useEffect(() => {
    youTobeService
      .getVideos(`videos?part=snippet,statistics&id=${path}`)
      .then((data) => setVideoData(data[0]));

    youTobeService
      .getVideos(`search?part=snippet&relatedToVideoId=${path}&type=video`)
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="VideoDetails">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${path}`} controls />
      <section>
        {parseInt(videoData?.statistics.viewCount).toLocaleString()} Views
        <br />
        {parseInt(videoData?.statistics.likeCount).toLocaleString()} Likes
      </section>
      {videos?.map((item, idx) => (
        <VideoCard video={item} />
      ))}
    </div>
  );
}

export default VideoDetails;
