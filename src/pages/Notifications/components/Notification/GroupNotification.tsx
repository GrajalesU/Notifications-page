type Props = {
  isNew?: boolean;
  isLeft?: boolean;
  imgSrc: string;
  user: string;
  group: string;
  time: string;
};

const GroupNotification = ({
  isNew = false,
  isLeft = false,
  imgSrc,
  user,
  group,
  time,
}: Props) => {
  return (
    <div className={isNew ? 'notification new' : ' notification'}>
      <img src={imgSrc} alt={`${user} profile`} className="notification--profileImage" />
      <div className="notification--description">
        <h3 className="notification--description__name">{user}</h3>
        <p className="notification--description__info">
          {isLeft ? 'left the' : 'has joined your'} group{' '}
          <strong>
            <a
              href="https://grajalesu.github.io/portfolio/"
              target={'_blank'}
              rel="noreferrer"
            >
              {group}
            </a>
          </strong>
        </p>
        {isNew && <div className="redDot" />}
        <small className="notification--description__time">{time}</small>
      </div>
    </div>
  );
};

export default GroupNotification;
