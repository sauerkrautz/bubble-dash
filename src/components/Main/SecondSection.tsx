import "./secondSection.scss";

// svgs
import figmaIcon from "../../assets/afterHero/figmaLogo.svg";
import codeLogo from "../../assets/afterHero/code.svg";
import articleMedium from "../../assets/afterHero/ArticleMedium.svg";
import presentationChart from "../../assets/afterHero/PresentationChart.svg";
import videoIcon from "../../assets/afterHero/VideoCamera.svg";
import penNib from "../../assets/afterHero/PenNib.svg";

const SecondSection = () => {
  return (
    <div className="container grid-rows grid-columns">
      <div className="item">
        <img src={figmaIcon} alt="" />
        <p>Web Development</p>
        <p>
          Want to create a website that has many features? We have the answer
          for you.
        </p>
      </div>
      <div className="item">
        <img src={codeLogo} alt="" />
      </div>
      <div className="item">
        <img src={articleMedium} alt="" />
      </div>
      <div className="item">
        <img src={presentationChart} alt="" />
      </div>
      <div className="item">
        <img src={videoIcon} alt="" />
      </div>
      <div className="item">
        <img src={penNib} alt="" />
      </div>
    </div>
  );
};

export default SecondSection;
