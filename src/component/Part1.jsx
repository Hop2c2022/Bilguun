import { FacebookIcon } from "../component/Facebook";
import { InstagramIcon } from "../component/Instagram";
import { TwitterIcon } from "../component/Twitter";
import "../css/Part1.css";
export const PartOne = () => {
  return (
    <div className="part1">
      <div className="logo">
        <div className="text">team</div>
        <div className="item"></div>
      </div>
      <div className="usages">
        <div className="icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
        <div className="texts4">
          <div className="textstyle">Instagram</div>
          <div className="textstyle">Facebook</div>
          <div className="textstyle">Twitter</div>
          <div className="textstyle">Instagram</div>
          <div className="textstyle">Facebook</div>
          <div className="textstyle">Twitter</div>
        </div>
      </div>
    </div>
  );
};
