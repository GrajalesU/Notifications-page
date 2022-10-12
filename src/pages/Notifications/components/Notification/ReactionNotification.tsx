type Props = {
  isNew?: boolean;
  imgSrc: string;
  user: string;
  post: string;
  time: string;
};

const ReactionNotification = ({ isNew = false, imgSrc, user, post, time }: Props) => {
  return (
    <div className={isNew ? 'notification new' : ' notification'}>
      <img src={imgSrc} alt={`${user} profile`} className="notification--profileImage" />
      <div className="notification--description">
        <h3 className="notification--description__name">{user}</h3>
        <p className="notification--description__info">
          reacted to your recent post <strong>{post}</strong>
        </p>
        {isNew && <div className="redDot" />}
        <small className="notification--description__time">{time}</small>
      </div>
    </div>
  );
};

export default ReactionNotification;
