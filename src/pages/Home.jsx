import "../css/Home.css";
import React, { useState, useRef } from "react";
import { Tab } from "./../component/Tabs";
import { PartOne } from "../component/parts/Part1";
import { PartTwo } from "../component/parts/Part2";
import { PartThree } from "../component/parts/Part3";
import { PartFour } from "../component/parts/Part4";
import { PartFive } from "../component/parts/Part5";
import { Header } from "../component/Header";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="bodypart">
        <div className="bigtext">Instant collaborations for remote teams</div>
        <div className="smalltext">
          All in one for your remote team chats, collaboration and track
          projects
        </div>
        <div className="emailsection">
          <input className="emailinput" placeholder="Email"></input>
          <div className="earlyaccess">Get early access</div>
        </div>
      </div>
      <div className="torso design">
        <div className="texts">
          <div className="bigtext2">Your Hub for teamwork</div>
          <div className="smalltext2">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="learnmore">Learn more</div>
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
            style={{ width: "40%", height: "20%", display: "flex" }}
            src="assets/anotherwomanidk.png"
            alt=""
          ></img>
        </div>
        <div className="texts2 textcolor">
          <div className="bigtext3">Simple task management</div>
          <div className="smalltext3 textcolor">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="learnmore">Learn more</div>
        </div>
      </div>
      <div className="torso design3">
        <div className="texts3">
          <div className="bigtext4 textcolor">
            Scheduling that actually works
          </div>
          <div className="smalltext4 textcolor">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="learnmore">Learn more</div>
        </div>
        <div className="background3"></div>
      </div>
      <div className="torso design4">
        <div className="headpart">
          <div className="title textcolor">What people say about us</div>
        </div>
        <div className="bodypart1">
          <div className="reviews">
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
          </div>
        </div>
        <div className="endpart">
          <PartOne />
          <PartTwo />
          <PartThree />
          <PartFour />
          <PartFive />
        </div>
      </div>
    </div>
  );
};
