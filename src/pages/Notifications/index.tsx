import './styles.scss';

import angelaImage from '../../assets/images/avatar-angela-gray.webp';
import annaImage from '../../assets/images/avatar-anna-kim.webp';
import jacobImage from '../../assets/images/avatar-jacob-thompson.webp';
import kimberlyImage from '../../assets/images/avatar-kimberly-smith.webp';
import markImage from '../../assets/images/avatar-mark-webber.webp';
import nathanImage from '../../assets/images/avatar-nathan-peterson.webp';
import rizkyImage from '../../assets/images/avatar-rizky-hasanuddin.webp';
import chessImage from '../../assets/images/image-chess.webp';
import Header from './components/Header';
const Notifications = () => {
  return (
    <div>
      <Header />
      <div className="notification new">
        <img src={markImage} alt="$name profile" className="notification--profileImage" />
        <div className="notification--description">
          <h3 className="notification--description__name">Mark Webber</h3>
          <p className="notification--description__info">
            reacted to your recent post <strong>My first tournament today!</strong>
          </p>
          <div className="redDot" />
          <small className="notification--description__time">1m ago</small>
        </div>
      </div>
      <div className="notification new">
        <img
          src={angelaImage}
          alt="$name profile"
          className="notification--profileImage"
        />
        <div className="notification--description">
          <h3 className="notification--description__name">Angela Gray</h3>
          <p className="notification--description__info">followed you</p>
          <div className="redDot" />
          <small className="notification--description__time">5m ago</small>
        </div>
      </div>
      <div className="notification new">
        <img
          src={jacobImage}
          alt="$name profile"
          className="notification--profileImage"
        />
        <div className="notification--description">
          <h3 className="notification--description__name">Jacob Thompson</h3>
          <p className="notification--description__info">
            has joined your group{' '}
            <strong>
              <a
                href="https://grajalesu.github.io/portfolio/"
                target={'_blank'}
                rel="noreferrer"
              >
                Chess Club
              </a>
            </strong>
          </p>
          <div className="redDot" />
          <small className="notification--description__time">1 day ago</small>
        </div>
      </div>
      <div className="notification">
        <img
          src={rizkyImage}
          alt="$name profile"
          className="notification--profileImage"
        />
        <div className="notification--description">
          <h3 className="notification--description__name">Rizky Hasanuddin</h3>
          <p className="notification--description__info">sent you a private message</p>
          <small className="notification--description__time">5 days ago </small>
          <div className="message">
            <p>
              {`Hello, thanks for setting up the Chess Club. I've been a member for a few
            weeks now and I'm already having lots of fun and improving my game.`}
            </p>
          </div>
        </div>
      </div>
      <div className="notification">
        <img
          src={kimberlyImage}
          alt="$name profile"
          className="notification--profileImage"
        />
        <div className="notification--description">
          <h3 className="notification--description__name">Kimberly Smith</h3>
          <p className="notification--description__info">commented on your picture</p>
          <small className="notification--description__time">1 week ago</small>
        </div>
        <div className="picture">
          <img src={chessImage} alt="chess play" />
        </div>
      </div>
      <div className="notification">
        <img
          src={nathanImage}
          alt="$name profile"
          className="notification--profileImage"
        />
        <div className="notification--description">
          <h3 className="notification--description__name">Nathan Peterson</h3>
          <p className="notification--description__info">
            reacted to your recent post{' '}
            <strong> 5 end-game strategies to increase your win rate</strong>
          </p>
          <small className="notification--description__time">2 weeks ago</small>
        </div>
      </div>
      <div className="notification">
        <img src={annaImage} alt="$name profile" className="notification--profileImage" />
        <div className="notification--description">
          <h3 className="notification--description__name">Anna Kim</h3>
          <p className="notification--description__info">
            left the group{' '}
            <strong>
              <a href="/">Chess Club</a>
            </strong>
          </p>
          <small className="notification--description__time">2 weeks ago</small>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
