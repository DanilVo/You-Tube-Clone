import { useEffect, useState } from "react";
import VideoCardModel from "../../../Models/VideoCardModel";
import youTobeService from "../../../Service/YoutobeService";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Router from "../Router/Router";
import "./Layout.css";

function Layout(): JSX.Element {
  const [pageName, setPageName] = useState<string>("new");
  const [videos, setVideos] = useState<VideoCardModel[]>();

  useEffect(() => {
    youTobeService.getVideos(`search?part=snippet&q=${pageName}`).then((data) =>
      setVideos(data)
    );
  }, [pageName]);
  
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <aside>
        <Aside setPageName={setPageName} />
      </aside>
      <main>
        <Router pageName={pageName} videos={videos} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
