import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function CreateArea() {
  return (
    <div>
      <Header/>
      <h3 className="hi">Select</h3>
      <button className="parent-button">
        <Link to="/create">Text-Text</Link>
      </button>
      <button className="parent-button">
        <Link to="/create">Text-Audio</Link>
      </button>
      <button className="parent-button">
        <Link to="/create"> PDF Translation</Link>
      </button>
    </div>
  );
}

export default CreateArea;
