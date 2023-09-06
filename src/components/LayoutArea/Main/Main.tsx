import VideoCardModel from "../../../Models/VideoCardModel";
import VideoCard from "../../VideoCard/VideoCard";
import "./Main.css";

function Main({pageName,video,}: {  pageName: string,  video: VideoCardModel[]}): JSX.Element {

  return (
    <div className="Main">
      <div className="section">
        {pageName} <span>Videos</span>
      </div>
      {video?.map((item, idx) => (
        <div key={idx} className="cards">
          <VideoCard video={item}/>
        </div>
      ))}
    </div>
  );
}

export default Main;
