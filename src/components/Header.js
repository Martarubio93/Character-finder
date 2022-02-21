import logo from "../images/logo4.png";

const Header = () => {
  return (
    <header className="header">
      <a href="#"className="header__logo">
        <img className="logo__img" src={logo} alt="Harry-Potter-Logo"></img>
      </a>
    </header>
  );
};

export default Header;
