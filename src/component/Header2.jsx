import "../css/Header2.css";
import { Link } from "react-router-dom";

export const Header2 = () => {
  return (
    <div className="header2">
      <Link className="noUnderline" to="/">
        <div className="logo">
          <div className="text11">team</div>
          <div className="item3"></div>
        </div>
      </Link>
      <div className="parts">
        <div>
          <Link className="text4 decoration blogpost" to="/blogposts">
            Blogs
          </Link>
        </div>
        <div>
          <Link className="text4 decoration post" to="/posts">
            Posts
          </Link>
        </div>
        <div>
          <Link className="text4 decoration post" to="/products">
            Products
          </Link>
        </div>
        <div>
          <Link className="text4 decoration post" to="/services">
            Services
          </Link>
        </div>
        <div>
          <Link className="text4 decoration post" to="/contacts">
            Contacts
          </Link>
        </div>
        <div>
          <Link className="text4 decoration post" to="login">
            Log In
          </Link>
        </div>
        <div className="text5 getaccess2">Get Access</div>
      </div>
    </div>
  );
};
