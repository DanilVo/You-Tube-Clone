import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import VideoCardModel from "../../../Models/VideoCardModel";
import VideoDetails from "../../VideoDetails/VideoDetails";
import ChannelDetails from "../../ChannelDetails/ChannelDetails";

function Router({pageName, videos}: {pageName: string, videos: VideoCardModel[]}): JSX.Element {
    
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Main pageName={pageName} video={videos}/>} />
        <Route path="/video/:path" element={<VideoDetails />} />
        <Route path="/channel/:path" element={<ChannelDetails />} />
        {/* <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
      </Routes>
    </div>
  );
}

export default Router;
