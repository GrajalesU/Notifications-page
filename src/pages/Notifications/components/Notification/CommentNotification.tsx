type Props = {
  isNew?: boolean;
  imgSrc: string;
  user: string;
  time: string;
  imgComment: string;
};

const CommentNotification = ({
  isNew = false,
  imgSrc,
  user,
  time,
  imgComment,
}: Props) => {
  return (
    <div
      className={isNew ? 'notification new' : ' notification'}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div style={{ display: 'flex' }}>
        <img
          src={imgSrc}
          alt={`${user} profile`}
          className="notification--profileImage"
        />
        <div className="notification--description">
          <h3 className="notification--description__name">{user}</h3>
          <p className="notification--description__info">commented on your picture</p>
          <small className="notification--description__time">{time}</small>
        </div>
      </div>
      <div className="picture">
        <img src={imgComment} alt="chess play" />
      </div>
    </div>
  );
};

export default CommentNotification;
