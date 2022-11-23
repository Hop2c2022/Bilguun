import "../css/Home.css";
import { Tabs1 } from "./../component/Tab1";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { LearnMore } from "../component/LearnMore";

export const Home = () => {
  return (
    <div className="homecontainer">
      <Header />
      <div className="homebodypart">
        <div className="homebigtext">
          Instant collaborations for remote teams
        </div>
        <div className="homesmalltext">
          All in one for your remote team chats, collaboration and track
          projects
        </div>
        <div className="homeemailsection">
          <input className="emailinput" placeholder="Email"></input>
          <div className="earlyaccess">Get early access</div>
        </div>
      </div>
      <div className="torsopart">
        <div className="torso design">
          <div className="texts">
            <div className="bigtextstyle">Your Hub for teamwork</div>
            <div className="smalltextstyle">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <LearnMore />
          </div>
          <div className="meetings">
            <img
              style={{
                width: "50%",
                height: "30%",
                display: "flex",
              }}
              src="assets/meetings.png"
              alt=""
            />
          </div>
        </div>
        <div className="torso design2">
          <div className="anotherwoman">
            <img
              style={{ width: "100%", height: "100%", display: "flex" }}
              src="assets/anotherwoman.png"
              alt=""
            ></img>
          </div>
          <div className="texts2 textcolor">
            <div className="bigtextstyle">Simple task management</div>
            <div className="smalltextstyle textcolor">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <LearnMore />
          </div>
        </div>
        <div className="torso design3">
          <div className="texts3">
            <div className="bigtextstyle">Scheduling that actually works</div>
            <div className="smalltextstyle textcolor">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <LearnMore />
          </div>
          <div className="background3">
            <img
              style={{ width: "120%", height: "110%", display: "flex" }}
              src="assets/background3.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="torso design4">
          <div className="headpart">
            <div className="title textcolor">What people say about us</div>
          </div>
          <div className="bodypart1">
            <div className="reviews">
              <Tabs1 />
              <Tabs1 />
              <Tabs1 />
              <Tabs1 />
              <Tabs1 />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
