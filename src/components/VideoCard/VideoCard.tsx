import { NavLink } from "react-router-dom";
import VideoCardModel from "../../Models/VideoCardModel";
import "./VideoCard.css";

function VideoCard({ video }: { video: VideoCardModel }): JSX.Element {
  return (
    <div className="VideoCard">
      <div>
        <NavLink to={`/video/${video.id.videoId}`}>
          <img src={video?.snippet?.thumbnails?.high?.url} />
        </NavLink>
        <section>
          <NavLink to={`/video/${video.id.videoId}`}>
            {video?.snippet.title}
          </NavLink>
          <NavLink to={`/channel/${video.snippet.channelId}`}>
            {video?.snippet.channelTitle}
          </NavLink>
        </section>
      </div>
    </div>
  );
}

export default VideoCard;
