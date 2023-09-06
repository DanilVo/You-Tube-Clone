import { useParams } from "react-router-dom";
import "./VideoDetails.css";

function VideoDetails(): JSX.Element {

    const param = useParams()
    const path = param.path

    return (
        <div className="VideoDetails">
			{path}
        </div>
    );
}

export default VideoDetails;
