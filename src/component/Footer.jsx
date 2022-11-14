import { PartOne } from "../component/parts/Part1";
import { PartTwo } from "../component/parts/Part2";
import { PartThree } from "../component/parts/Part3";
import { PartFour } from "../component/parts/Part4";
import { PartFive } from "../component/parts/Part5";
import "./../css/Footer.css";

export const Footer = () => {
  return (
    <div className="endpart">
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartFive />
    </div>
  );
};
