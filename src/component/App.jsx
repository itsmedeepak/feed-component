import React, { useState } from 'react';
import { BiComment, BiLike } from "react-icons/bi";


function App() {

  const [seeMore, setSeeMore] = useState(false);
  const [like, setLike] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  }

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <div className="feed-container feed-box">
      <p className={seeMore ? 'feed-see-more expanded' : 'feed-see-more'}>The solution I tried....</p>


      <div className="feed-see-more">
        <p
          className={seeMore ? 'feed-see-more expanded' : 'feed-see-more'}
          onClick={handleSeeMore}
        >
          See more
        </p>
        
        <p className={seeMore ? 'show-sol expanded-sol' : 'show-sol'}>
          <p>The Solution I tried:</p>
          <p>1. Uninstalled Xcode and Installed it again.</p>
          <p>2. Delete Developer file from User/library.</p>
          <p onClick={handleSeeMore}> See Less</p>
        </p>

      </div>


      <div className="feed-liked-user">


        <p className='user-box'>
          <p className="usericon">
            SL
          </p>
        </p>
        <p className="feed-like">
          Liked by Another User
        </p>
      </div>


      <hr className='hr' />
      <div className="feed-like-cmt">

        <p onClick ={handleLike} className={like ? 'feed-like-btn liked' : 'feed-like-btn'}>
          < BiLike
            className='like-btn'
            
          />
          Like
        </p>

        <p className="feed-cmt-btn"><BiComment className='cmt-btn' />Comment</p>
      </div>
    </div>
  )
}

export default App;
