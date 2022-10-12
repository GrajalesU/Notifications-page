type Props = {
  isNew?: boolean;
  imgSrc: string;
  user: string;
  message: string;
  time: string;
};

const MessageNotification = ({ isNew = false, imgSrc, user, message, time }: Props) => {
  return (
    <div className={isNew ? 'notification new' : ' notification'}>
      <img src={imgSrc} alt={`${user} profile`} className="notification--profileImage" />
      <div className="notification--description">
        <h3 className="notification--description__name">{user}</h3>
        <p className="notification--description__info">sent you a private message</p>
        <small className="notification--description__time">{time} </small>
        <div className="message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageNotification;
