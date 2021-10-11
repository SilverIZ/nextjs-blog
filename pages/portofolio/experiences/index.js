import React, { Component } from "react";

export default class Experience extends Component {
  constructor() {
    super();
    this.state = {
      jobName1: "Network Engineer",
      companyName1: "CV Griya Sarana Informatika",
      yearRange1: "2017 - 2018",
      jobName2: "Network Engineer Intern",
      companyName2: "PT Telkom Pagongan Cirebon",
      yearRange2: "2015",
    };
  }
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">EXPERIENCE</h1>
        <div className="row">
          <div className="column">
            <h3>{this.state.jobName1}</h3>
            <h5 className="colortext">{this.state.companyName1}</h5>
          </div>
          <div className="column">
            <h4 className="yeardate colortext">{this.state.yearRange1}</h4>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>{this.state.jobName2}</h3>
            <h5 className="colortext">{this.state.companyName2}</h5>
          </div>
          <div className="column">
            <h4 className="yeardate colortext">{this.state.yearRange2}</h4>
          </div>
        </div>
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
