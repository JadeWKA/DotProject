import React from "react";
import { Alert, Card } from "react-bootstrap";

// import UserCard from "../components/UserCard/UserCard";
// import userProfile from "../components/images/genericMale2.jpg";

import homepagePhoto from "../components/images/dot-homepage-image.jpg";

import dotSmallLogo from "../components/layout/dot-small-logo.png";

function HomePage() {
  return (
    <div className="homepageDiv">
      <div className="d-grid gap-2">
        <Alert>
          <img
            className="dotAnimation"
            src={dotSmallLogo}
            alt="dot-small-logo"
          />
          <center>
            <h1>WELCOME TO THE DOT DATING APP!</h1>
          </center>
        </Alert>
        <h2>
          <center>
            <p>
              Sign up now and meet thousands of other people just like you that
              are looking for their perfect match!
            </p>
          </center>
        </h2>
      </div>

      <center>
        <Alert>
          <Card style={{ width: "800px" }}>
            <Card.Img src={homepagePhoto} width="50px" />
            <Card.Body>
              <Card.Title>FIND YOUR PERFECT MATCH TODAY!</Card.Title>
              <Card.Text>
                Sign up for Dot quickly and easily with just an email address
                and password. You never know, your soul mate may just be there
                waiting for you!
              </Card.Text>
            </Card.Body>
          </Card>
        </Alert>
      </center>

      {/* <div class="flexbox-container">
        <div>
          <UserCard fullName="Jane Doe" userPhoto={userProfile} />
        </div>
        <div>
          <UserCard fullName="John Doe" userPhoto={userProfile} />
        </div>
        <div>
          <UserCard fullName="Tom Cruise" userPhoto={userProfile} />
        </div>
        <div>
          <UserCard fullName="Angelina Jolie" userPhoto={userProfile} />
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
