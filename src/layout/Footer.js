import './styles/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerLinks'>
        <div className='linkGroup'>
          <h4>Group link</h4>
          <ul>
            <li><a href='#'>link one</a></li>
            <li><a href='#'>link two</a></li>
            <li><a href='#'>link three</a></li>
          </ul>
        </div>
        <div className='linkGroup'>
          <h4>Group link</h4>
          <ul>
            <li><a href='#'>link one</a></li>
            <li><a href='#'>link two</a></li>
            <li><a href='#'>link three</a></li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>
          Openweathermap api <br />
          <i>5 day weather forecast, {new Date().getFullYear()} ⓒ</i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;