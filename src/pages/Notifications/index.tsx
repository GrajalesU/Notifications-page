import './styles.scss';

import { useState } from 'react';

import angelaImage from '../../assets/images/avatar-angela-gray.webp';
import annaImage from '../../assets/images/avatar-anna-kim.webp';
import jacobImage from '../../assets/images/avatar-jacob-thompson.webp';
import kimberlyImage from '../../assets/images/avatar-kimberly-smith.webp';
import markImage from '../../assets/images/avatar-mark-webber.webp';
import nathanImage from '../../assets/images/avatar-nathan-peterson.webp';
import rizkyImage from '../../assets/images/avatar-rizky-hasanuddin.webp';
import chessImage from '../../assets/images/image-chess.webp';
import Header from './components/Header';
import CommentNotification from './components/Notification/CommentNotification';
import FollowNotification from './components/Notification/FollowNotification';
import GroupNotification from './components/Notification/GroupNotification';
import MessageNotification from './components/Notification/MessageNotification';
import ReactionNotification from './components/Notification/ReactionNotification';

const Notifications = () => {
  const [read, setRead] = useState(false);
  return (
    <div className="container">
      <Header setRead={setRead} />
      <ReactionNotification
        isNew={!read}
        imgSrc={markImage}
        user="Mark Webber"
        post="My first tournament today!"
        time="1m ago"
      />
      <FollowNotification
        isNew={!read}
        imgSrc={angelaImage}
        user="Angela Gray"
        time="5m ago"
      />
      <GroupNotification
        isNew={!read}
        imgSrc={jacobImage}
        user="Jacob Thompson"
        time="1 day ago"
        group="Chess Club"
      />
      <MessageNotification
        imgSrc={rizkyImage}
        user="Rizky Hasanuddin"
        time="5 days ago"
        message={`Hello, thanks for setting up the Chess Club. I've been a member for a few
        weeks now and I'm already having lots of fun and improving my game.`}
      />
      <CommentNotification
        imgSrc={kimberlyImage}
        user="Kimberly Smith"
        time="1 week ago"
        imgComment={chessImage}
      />
      <ReactionNotification
        imgSrc={nathanImage}
        user="Nathan Peterson"
        post="5 end-game strategies to increase your win rate"
        time="2 weeks ago"
      />
      <GroupNotification
        isLeft={true}
        imgSrc={annaImage}
        user="Anna Kim"
        group="Chess Club"
        time="2 weeks ago"
      />
    </div>
  );
};

export default Notifications;
