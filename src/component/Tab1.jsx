import "../css/Tab1.css";
import { StarIcon } from "./Star";

export const Tabs1 = () => {
  return (
    <div className="tab1">
      <div className="stars">
        {" "}
        {[1, 2, 3, 4, 5].map((el, i) => (
          <div key={i}>
            {" "}
            <StarIcon width={18} height={18} />
          </div>
        ))}
      </div>
      <div className="tab1reviewtext textcolor">
        {" "}
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className="tab1profile">
        <div className="tab1pfp"></div>
        <div className="tab1name">Amy Klassen</div>
      </div>
    </div>
  );
};
