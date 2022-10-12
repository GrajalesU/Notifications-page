import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header--notifications">
        <h1 className="header--notifications__title">Notifications</h1>
        <small className="header--notifications__number">3</small>
      </div>
      <button className="header--button"> Mark all as read</button>
    </div>
  );
};

export default Header;
