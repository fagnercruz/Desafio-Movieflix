import LogoutBtn from "components/LogoutBtn";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md main-nav">
      <div className="container-fluid">
        <a href="/" className="navLogo">
          <h4>MOVIEFLIX</h4>
        </a>
      </div>
      <div className="logout-area-container">
        <LogoutBtn/>
      </div>
    </nav>
  );
};

export default Navbar;
