import "./About.css";

const About = () => {
  return (
    <section id="About">
      <div className="data">
        <p className="elifew">Player Data</p>
        <div className="grid-container">
          <p className="gird1">Date of Birth: </p>
          <p className="grid2">21 August 2002 </p>
          <p className="gird1">Height: </p>
          <p className="grid2">1,92 m </p>
          <p className="gird1">Citizenship: </p>
          <p className="grid2">Ghana</p>
          <p className="gird1">Position: </p>
          <p className="grid2">Defender- Center Back</p>
          <p className="gird1">Foot: </p>
          <p className="grid2">Right</p>
          <p className="gird1">Current Club: </p>
          <p className="grid2">FC Lorient</p>
          <p className="gird1">Current International: </p>
          <p className="grid2">Ghana U23</p>
        </div>
      </div>
      <p className="elifew">Bio</p>
      <div id="About2">
        <p className="elifee">Early Life</p>
        <p className="etext">
          Born and raised in Teshie, Adjei started to play youth football with
          local club <span className="eee">Danbort FC at age 13. </span>
          The team competed in Division One League, Ghana's second tier.
        </p>
        <p className="elifee">Club Career</p>
        <p className="etext">
          1. <span className="eee">Hammarby IF </span>
          On 13 August 2021, Adjei joined
          <span className="eee"> Hammarby TFF </span>in Sweden's third tier
          Ettan, the feeder team of Hammarby IF. He was signed on a one-year
          loan from Danbort. He was then the captain of Danbort. <br />
          <p className="etext2">
            2. On 11 July 2022, Adjei was promoted to{" "}
            <span className="eee">Hammarby's </span> first team, completing a
            permanent transfer from Danbort by signing a four years contract. On
            17 September the same year, Adjei made his{" "}
            <span className="eee">Allsvenskan</span> debut in a 1–1 away draw
            against <span className="eee">BK Häcken</span>
          </p>
          <p className="etext2">
            3. On 27 January 2024, Adjei joined
            <span className="eee"> FC Lorient </span> in France on loan until
            the end of the season where he is having very good stats under all
            the matches he has played.
          </p>
        </p>
        <p className="elifee">International Career</p>
        <p className="etext">
          <p className="etext2">
            1. Adjei was the{" "}
            <span className="eee">youngest Ghanaian player </span>to be called
            up to the <span className="eee">U20 African cup</span> in 2019
          </p>
          2. Being part of the Ghanaian youth selections since 2018, Adjei was
          the vice captain of the{" "}
          <span className="eee">Ghana national U17's.</span> <br />
          <p className="etext2">
            3. Adjei was called up to the{" "}
            <span className="eee">Ghana national U20's </span> for the 2019
            Africa U-20 Cup of Nations, <span className="eee">at age 16.</span>{" "}
            <br />
            <p className="etext2">
              4. He was also part of Ghana's squad in the 2021{" "}
              <span className="eee">Africa U-20 Cup of Nations.</span>
            </p>
          </p>
        </p>
      </div>
    </section>
  );
};

export default About;
