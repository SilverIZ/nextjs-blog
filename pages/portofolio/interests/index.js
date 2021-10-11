import React, { Component } from "react";

export class Interests extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">INTERESTS</h1>
        <br></br>
        <p>
          I started my journey in the computer world starting in high school
          when I majored in computer and network engineering, now I’m 21 years
          old, Pursuing my Computer Science Degree in University of
          Singaperbangsa Karawang. Mobile development is my center of interest,
          i always love the idea of cross-platform development. I am also
          interested in machine learning and data mining.
        </p>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
          :root {
            --sidebar-flex: 1.5;
            --condiv-flex: 6;
            --fontsize-p: 1.2rem;
            --fontsize-nav: 1.6rem;
          }
          * {
            margin: 0;
            padding: 0;
          }
          body {
            font-family: "Roboto";
          }
          .App {
            display: flex;
            width: 100vw;
            min-height: 100vh;
          }
          nav {
            padding: 60px 30px 0px 30px;
            flex: var(--sidebar-flex);
            background: rgb(44, 62, 233);
          }
          .condiv {
            padding: 100px;
            background-color: #f4f5f9;
            flex: var(--condiv-flex);
          }

          .yeardate {
            margin-left: 200px;
          }
          .colortext {
            color: blue;
          }
          .home {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          .profilepic {
            border-radius: 50%;
            width: 200px;
            margin: 30px;
          }
          nav ul {
            font-size: var(--fontsize-nav);
            text-align: center;
            list-style-type: none;
            text-decoration: none;
            color: white !important;
          }
          nav ul li {
            margin: 40px;
          }

          a {
            text-decoration: none;
            color: white;
          }

          .subtopic {
            margin: 10px 10px 30px 10px !important;
          }
          p {
            font-size: var(--fontsize-p);
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          p {
            margin: 10px;
          }

          .row {
            display: flex;
          }

          .column {
            flex: 50%;
          }

          .active {
            font-weight: bolder;
          }

          @media all and (max-width: 450px) {
            :root {
              --fontsize-nav: 1rem;
              --sidebar-flex: 0;
            }
            .App {
              flex-direction: column;
            }
            .condiv {
              padding: 50px;
            }
            nav ul {
              display: flex;
            }
            nav ul li {
              margin: 10px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Interests;
