type Props = {
  isNew?: boolean;
  imgSrc: string;
  user: string;
  time: string;
};

const FollowNotification = ({ isNew = false, imgSrc, user, time }: Props) => {
  return (
    <div className={isNew ? 'notification new' : ' notification'}>
      <img src={imgSrc} alt={`${user} profile`} className="notification--profileImage" />
      <div className="notification--description">
        <h3 className="notification--description__name">{user}</h3>
        <p className="notification--description__info">followed you</p>
        {isNew && <div className="redDot" />}
        <small className="notification--description__time">{time}</small>
      </div>
    </div>
  );
};

export default FollowNotification;
