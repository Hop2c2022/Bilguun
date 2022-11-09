import "../css/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link className="noUnderline" to="/">
        <div className="logo">
          <div className="text">team</div>
          <div className="item"></div>
        </div>
      </Link>
      <div className="parts">
        <div>
          <Link className="text1 decoration blogpost" to="/blogposts">
            Blogs
          </Link>
        </div>
        <div>
          <Link className="text1 decoration post" to="/posts">
            Posts
          </Link>
        </div>
        <div>
          <Link className="text1 decoration post" to="/products">
            Products
          </Link>
        </div>
        <div>
          <Link className="text1 decoration post" to="/services">
            Services
          </Link>
        </div>
        <div>
          <Link className="text1 decoration post" to="/contacts">
            Contacts
          </Link>
        </div>
        <div>
          <Link className="text1 decoration post" to="login">
            Log In
          </Link>
        </div>
        <div className="text2 getaccess">Get Access</div>
      </div>
    </div>
  );
};
