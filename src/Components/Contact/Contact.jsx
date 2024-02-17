import "./Contact.css";
import facebook from "../../assets/Nat/facebook-icon.png";
import instagram from "../../assets/Nat/instagram.png";
import twitter from "../../assets/Nat/twitter.png";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="contact-div">
        <div>
          <p className="contact">Contact Me</p>
        </div>
        <div className="flex">
          <div className="img-flex">
            <img src={facebook} alt="" className="imgs" />
            <a href="https://www.facebook.com/profile.php?id=100077043607444">
              Nathaniel Adjei
            </a>
          </div>
          <div className="img-flex">
            <img src={instagram} alt="" className="imgs" />
            <a href="https://www.instagram.com/a.natty32/">a.natty32</a>
          </div>
        </div>
        <p className="contact2">
          Read About me- Click on any to take you to the page.
        </p>

        <div className="stories">
          <a href="https://www.ghanaweb.com/GhanaHomePage/SportsArchive/FC-Lorient-announce-signing-of-Ghanaian-defender-Nathaniel-Adjei-1913498">
            1. FC Lorient announce signing of Ghanaian defender Nathaniel Adjei
          </a>
          <a href="https://www.ghanaweb.com/GhanaHomePage/SportsArchive/Nathaniel-Adjei-helps-FC-Lorient-end-Stade-Reims-jinx-1916578">
            2. Nathaniel Adjei helps FC Lorient end Stade Reims jinx
          </a>
          <a href="https://ghanasoccernet.com/just-in-nathaniel-adjei-inches-closer-to-leeds-united-switch">
            3. JUST IN: Nathaniel Adjei inches closer to Leeds United switch
          </a>
          <a href="https://www.modernghana.com/sports/1283510/ghanaian-star-nathaniel-adjei-poised-for-elland.html">
            4. Ghanaian star Nathaniel Adjei poised for Elland Road as Leeds
            United nears £3 Million deal
          </a>
          <a href="https://www.si.com/soccer/sunderland/news/sunderland-keen-to-beat-championship-rivals-to-ghanaian-defender-nathaniel-adjei">
            5. Sunderland keen to beat Championship rivals to Ghanaian defender,
            claims report
          </a>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Contact;
