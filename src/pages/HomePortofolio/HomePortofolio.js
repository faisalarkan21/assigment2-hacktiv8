import React from "react";
import "./HomePortofolio.css";

const AnotherComponent = (props) => {
  return (
    <>
      <h1>This is Another Component</h1>
      {props.isButtonEnable && <button> Submit </button>}
    </>
  );
};

const AnotherComponent2 = (props) => {
  return (
    <>
      <h1>This is Another Component 2</h1>
    </>
  );
};

const Awards = () => {
  const listAwards = [
    "Google Analytics Certified Developer",
    "Mobile Web Specialist - Google Certification",
    "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
    "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
    "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
    "1 st Place - James Buchanan High School - Hackathon 2006",
    "3 rd Place - James Buchanan High School - Hackathon 2005",
  ];

  return (
    <>
      <h1>AWARDS & CERTIFICATIONS</h1>
      <ul>
        <li>Google Analytics Certified Developer</li>
        {listAwards?.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </>
  );
};

class HomePortofolio extends React.Component {
  state = {
    isButtonEnable: false,
  };

  setButtonStatus = () => {
    this.setState({ isButtonEnable: !this.state.isButtonEnable });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {/* <button className="btn btn-primary">Click</button> */}
        <Awards />
      </div>
    );
  }
}

export default HomePortofolio;
