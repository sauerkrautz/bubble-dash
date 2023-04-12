import "./secondSection.scss";

// svgs
import figmaIcon from "../../assets/afterHero/FigmaLogo.svg";
import codeLogo from "../../assets/afterHero/Code.svg";
import articleMedium from "../../assets/afterHero/ArticleMedium.svg";
import presentationChart from "../../assets/afterHero/PresentationChart.svg";
import videoIcon from "../../assets/afterHero/VideoCamera.svg";
import penNib from "../../assets/afterHero/PenNib.svg";

const SecondSection = () => {
  return (
    <div className="flex-column-center" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="flex-column-center" style={{ color: "black" }}>
        <p>Our Services</p>
        <p style={{ fontSize: 24 }}>We Provide What You Need</p>
      </div>
      <div className="container grid-columns">
        <div className="item flex-column-center">
          <div className="inner flex-column-center">
            <img src={figmaIcon} alt="" />
            <p>UI / UX Designer</p>
            <p>
              We are ready to make your website more friendly and efficient in
              the eyes of users
            </p>
          </div>
        </div>
        <div className="item flex-column-center">
          <div className="inner flex-column-center">
            <img src={codeLogo} alt="" />
            <p>Web Development</p>
            <p>
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
        </div>
        <div className="item flex-column-center">
          <div className="inner flex-column-center">
            <img src={articleMedium} alt="" />
            <p>Web Development</p>
            <p>
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
        </div>
        <div className="item flex-column-center">
          <div className="inner flex-column-center">
            <img src={presentationChart} alt="" />
            <p>Web Development</p>
            <p>
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
        </div>
        <div className="item flex-column-center">
          <div className="inner flex-column-center">
            <img src={videoIcon} alt="" />
            <p>Web Development</p>
            <p>
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
        </div>
        <div className="item flex-column-center">
          <div className="inner flex-column-center">
            <img src={penNib} alt="" />
            <p>Web Development</p>
            <p>
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
        </div>
        {/* <div className="item flex-column-center">
          <img src={codeLogo} alt="" />
        </div>
        <div className="item flex-column-center">
          <img src={articleMedium} alt="" />
        </div>
        <div className="item flex-column-center">
          <img src={presentationChart} alt="" />
        </div>
        <div className="item flex-column-center">
          <img src={videoIcon} alt="" />
        </div>
        <div className="item flex-column-center">
          <img src={penNib} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default SecondSection;
