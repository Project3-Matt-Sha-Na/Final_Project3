import React from "react";

const Header = props => {
  return (
    <div className="herder">
      {/* <button onClick={props.handleOpen}>open</button> */}
      <button className="toggle-butten" onClick={props.handleOpen}>
        <div className="toggle-butten-line" />
        <div className="toggle-butten-line" />
        <div className="toggle-butten-line" />
      </button>
      <h1 className="herde">Our Top Rated Movies List</h1>
    </div>
  );
};

export default Header;
