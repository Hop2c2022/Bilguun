import { FacebookIcon } from "../Facebook";
import { InstagramIcon } from "../Instagram";
import { TwitterIcon } from "../Twitter";
import "./../../css/PartsCss/Part1.css";

export const PartOne = () => {
  return (
    <div className="part1">
      <div className="logo">
        <div className="text3">team</div>
        <div className="item2"></div>
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
