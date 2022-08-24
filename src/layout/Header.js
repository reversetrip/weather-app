import './styles/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1>
        <a href='#'>5 DAY WEATHER FORECAST</a>
      </h1>
      <nav>
        <div>
          <ul>
            <li><a href='#'>Nav link</a></li>
            <li><a href='#'>Nav link</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;