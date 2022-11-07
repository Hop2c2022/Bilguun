import "../css/Home.css";
import React, { useState, useRef } from "react";
import { Tab } from "./../component/Tabs";
import { PartOne } from "../component/Part1";
import { PartTwo } from "../component/Part2";
import { PartThree } from "../component/Part3";
import { PartFour } from "../component/Part4";
import { PartFive } from "../component/Part5";

export const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="text">team</div>
          <div className="item"></div>
        </div>
        <div className="parts">
          <div className="text1 decoration products">Products</div>
          <div className="text1 decoration services">Services</div>
          <div className="text1 decoration contact">Contact</div>
          <div className="text1 decoration login">Log In</div>
          <div className="text2 getaccess">Get Access</div>
        </div>
      </div>
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
        <div className="meetings"></div>
      </div>
      <div className="torso design2">
        <div className="background2"></div>
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
