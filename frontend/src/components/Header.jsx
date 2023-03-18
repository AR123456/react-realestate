import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      This is the header
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
    </header>
  );
};

export default Header;
