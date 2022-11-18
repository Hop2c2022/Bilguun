import "./../css/BlogPost.css";
import { Header2 } from "../component/Header2";
import { Footer } from "../component/Footer";
import { Tabs2 } from "../component/Tab2";
import { Arrow1 } from "../component/Arrows/Arrow1";

export const BlogPost = () => {
  return (
    <div className="blogcontainer">
      <Header2 />
      <div className="blogbodypart">
        <div className="blogtexts">
          <div className="blogtitle">Blog Posts</div>
          <div className="blogtext">
            Our latest updates and blogs about managing your team
          </div>
        </div>
        <div className="blogtabsection">
          <div className="blogsection">
            <Tabs2 />
            <Tabs2 />
            <Tabs2 />
          </div>
          <div className="blogsection">
            <Tabs2 />
            <Tabs2 />
            <Tabs2 />
          </div>
          <div className="blogsection">
            <Tabs2 />
            <Tabs2 />
            <Tabs2 />
          </div>
        </div>
        <div className="blognext">
          <div className="bloginsidetext">Next</div>
          <Arrow1 />
        </div>
      </div>
      <Footer />
    </div>
  );
};
