import { useEffect, useState } from 'react';
import './Search.css';
import youTobeService from '../../Service/YoutobeService';
import { useParams } from 'react-router-dom';
import VideoCardModel from '../../Models/VideoCardModel';
import VideoCard from '../VideoCard/VideoCard';

function Search(): JSX.Element {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState<VideoCardModel[]>();
  useEffect(() => {
    youTobeService
      .getSearchVideos(`${searchTerm}`)
      .then((data) => setVideos(data));
  }, [searchTerm]);
  return (
    <div className="Search">
      {videos?.map((vid) => (
        <VideoCard video={vid} />
      ))}
    </div>
  );
}

export default Search;
