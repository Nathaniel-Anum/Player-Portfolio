import "./Achievement.css";
import firstimg from "../../assets/Nat/Ghana/1.jpg";
import sndimg from "../../assets/Nat/Ghana/2.jpg";
import thirdimg from "../../assets/Nat/Ghana/3.jpg";
import fvthimg from "../../assets/Nat/Ghana/6.jpg";
import sthimg from "../../assets/Nat/Ghana/8.jpg";
import tenth from "../../assets/Nat/Ghana/10.jpg";
import fimg from "../../assets/Nat/Club/1.jpg";
import simg from "../../assets/Nat/Club/2.jpg";
import thimg from "../../assets/Nat/Club/3.jpg";
import fvimg from "../../assets/Nat/Club/5.jpg";
import sximg from "../../assets/Nat/Club/6.jpg";
import sxxximg from "../../assets/Nat/Club/8.jpg";

// Not Inside
// import sxximg from "../../assets/Nat/Club/7.jpg";
// import foimg from "../../assets/Nat/Club/4.jpg";
// import sximg from "../../assets/Nat/Ghana/7.jpg";
// import eleth from "../../assets/Nat/Ghana/11.jpg";
// import twelth from "../../assets/Nat/Ghana/12.jpg";

const Achievement = () => {
  return (
    <section id="Achievement">
      <p className="elifew">Achievements</p>
      <div className="achievement">
        <p className="ahieve">Ghana U17 WAFU Silver Medalist</p>
        <p className="ahieve">Ghana U20 WAFU Gold Medalist</p>
        <p className="ahieve">Ghana U20 African Cup Champions 2021</p>
        <div className="img-holder">
          <p className="elifeww">Gallery</p>
          <div className="flex-container">
            <div className="img1">
              <img src={firstimg} alt="" className="img" />
            </div>

            <div className="img1">
              <img src={fvthimg} alt="" className="img" />
            </div>
            <div className="img1">
              <img src={sndimg} alt="" className="img" />
            </div>
            <div className="img1">
              <img src={thirdimg} alt="" className="img" />
            </div>

            <div className="img1">
              <img src={sthimg} alt="" className="img" />
            </div>
            <div className="img1">
              <img src={tenth} alt="" className="img" />
            </div>
            <div className="img1">
              <img src={fimg} alt="" className="img" />
            </div>
            <div className="img1">
              <img src={simg} alt="" className="img" />
            </div>
            <div className="img1">
              <img src={thimg} alt="" className="img" />
            </div>

            <div className="img1">
              <img src={fvimg} alt="" className="img" />
            </div>
            <div className="img1">
              <img src={sximg} alt="" className="img" />
            </div>

            <div className="img1">
              <img src={sxxximg} alt="" className="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
