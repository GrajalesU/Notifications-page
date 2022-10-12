import './styles.scss';

import { useState } from 'react';

type Props = {
  setRead: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setRead }: Props) => {
  const [notifications, setNotification] = useState(3);
  return (
    <div className="header">
      <div className="header--notifications">
        <h1 className="header--notifications__title">Notifications</h1>
        <small className="header--notifications__number">{notifications}</small>
      </div>
      <button
        className="header--button"
        onClick={() => {
          setRead(true);
          setNotification(0);
        }}
      >
        {' '}
        Mark all as read
      </button>
    </div>
  );
};

export default Header;
