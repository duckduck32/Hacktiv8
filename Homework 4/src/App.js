import React, { useState } from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftNavigation">
        <p className="title">QTemu</p>
        <p className="menus">Create Meetup</p>
        <p className="menus">Explore</p>
      </div>
      <div className="rightNavigation">
        <p>Login</p>
      </div>
    </div>
  );
}

function Event() {
  const [memberCount, setMemberCount] = useState(1078);
  const [joinedEvent, setJoinedEvent] = useState(false);
  const joinEventButton = () => {
    if (!joinedEvent) {
      setMemberCount(memberCount + 1);
      setJoinedEvent(true);
    } else {
      setMemberCount(memberCount - 1);
      setJoinedEvent(false);
    }
  };
  return (
    <div className="event">
      <div className="eventImage">
        <img
          className="eventThumbnail"
          src="https://media.istockphoto.com/id/500798563/photo/city-skyline-at-sunset-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=6v7sNMfwW56F5TxfvXH7lEh7nZynm1aRSK3fF0lICjU="
          alt=""
        />
      </div>
      <div className="eventDescription">
        <h2>Hacktiv8 Meetup</h2>
        <div className="eventDetails">
          <div className="leftDetails">
            <p>Location</p>
            <p>Members</p>
            <p>Organizers</p>
          </div>
          <div className="rightDetails">
            <p>Jakarta, Indonesia</p>
            <p>{memberCount}</p>
            <p>Adhy Wiranata</p>
          </div>
        </div>
        <div className="joinButton">
          <button onClick={joinEventButton}>
            {joinedEvent ? "Joined" : "Join Us"}
          </button>
        </div>
      </div>
    </div>
  );
}

function NextEvent() {
  return (
    <div class="next">
      <h1>Next Meetup</h1>
      <div class="nextContainer">
        <div class="nextTitle">
          <p>Awesome meetup and event</p>
        </div>
        <div class="nextTime">
          <p>25 January 2019</p>
        </div>
        <div class="nextContents">
          <p>Hello, JavaScript & Node.js Ninjas!</p>
          <p>
            Get ready for our monthly meetup JakartaJS! This will be our fifth
            meetup of 2018!
          </p>
          <p>
            The meetup format will contain some short stories and technical
            talks.
          </p>
          <p>
            If you have a short announcement you'd like to share with the
            audience, you may do so during open mic announcements.
          </p>
          <br />
          <p>Remember to bring a photo ID to get through building security.</p>
          <br />
          <p>-----</p>
          <br />
          <p>See you there!</p>
          <br />
          <p>Best,</p>
          <p>Hengki, Giovanni, Sofian, Riza, Agung</p>
          <p>The JakartaJS Organizers</p>
        </div>
      </div>
    </div>
  );
}

function Members() {
  return (
    <div class="members">
      <div class="TitleContainer">
        <h1>Members</h1>
        <p>See all</p>
      </div>
      <div class="membersContainer">
        <img
          class="memberThumbnail"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          alt=""
        />
        <div class="membersTextContainer">
          <p class="organizersText">Organizers</p>
          <div class="organizerList">
            <div class="firstOrganizerList">
              <p>Adhy Wiranata</p>
            </div>
            <div>
              <p>4 others.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div class="about">
      <h1>About Meetup</h1>
      <div class="aboutDescription">
        <p>
          Come and meet other developers interested in the JavaScript and it's
          library in the Greater Jakarta area.
        </p>
        <p>Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
      </div>
    </div>
  );
}

function Past() {
  return (
    <div class="past">
      <div class="TitleContainer">
        <h1>Past Meetups</h1>
        <p>See all</p>
      </div>
      <div class="allPastContainer">
        <div class="pastEventContainer">
          <div class="pastEvent">
            <p>27 November 2017</p>
            <hr />
            <p>#39 JakartaJS November Meetup with Kumparan.</p>
            <div class="flexingWent">
              <p>139</p>
              <p>went.</p>
            </div>
            <button>View</button>
          </div>
          <div class="pastEvent">
            <p>27 November 2017</p>
            <hr />
            <p>#39 JakartaJS November Meetup with Kumparan.</p>
            <div class="flexingWent">
              <p>139</p>
              <p>went.</p>
            </div>
            <button>View</button>
          </div>
          <div class="pastEvent">
            <p>27 November 2017</p>
            <hr />
            <p>#39 JakartaJS November Meetup with Kumparan.</p>
            <div class="flexingWent">
              <p>139</p>
              <p>went.</p>
            </div>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <hr />
        <h3>Copyright Hacktiv8 2018</h3>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Event />
      <NextEvent />
      <About />
      <Members />
      <Past />
      <Footer />
    </div>
  );
}

export default App;
