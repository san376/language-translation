import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav" style={{height:"30px", backgroundColor:"blue"}}>
            <button style={{height:"100%", marginLeft:"90%", backgroundColor:"yellow"}}><a href="#teacher">Teacher</a></button>
            <button style={{height:"100%", marginLeft:"2%", backgroundColor:"yellow"}}><a href="#parents">Parent</a> </button>
        </div>
    );
}