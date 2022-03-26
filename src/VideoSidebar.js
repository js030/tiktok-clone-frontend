import React, { useState } from 'react'
import "./VideoSidebar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';


function VideoSidebar({likes, shares, messages}) {

    const [liked, setLiked] = useState(false);

  return (
    <div className='videoSidebar'>
        <div className="videoSidebar__button">
            {liked?(
            <FavoriteBorderIcon fontSize='large'/>)
            : <FavoriteBorderIcon fontSize='large' onClick={(e) => setLiked(true)}/>
}
            <p>{liked ? likes + 1 : likes }</p>
        </div>

        <div className="videoSidebar__button">
            <MessageIcon fontSize='large'/>
            <p>{messages}</p>
        </div>

        <div className="videoSidebar__button">
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar