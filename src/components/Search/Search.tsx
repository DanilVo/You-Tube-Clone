import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCardModel from '../../Models/VideoCardModel';
import youTobeService from '../../Service/YoutobeService';
import VideoCard from '../VideoCard/VideoCard';
import './Search.css';

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
