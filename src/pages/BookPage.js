import logo from '../logo.svg';
import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import '../style/style.css';

//Images for cards
import cardOne from '../style/cardOne.jpg';
import cardTwo from '../style/cardTwo.jpg';

//Images for Hero
import heroOne from '../style/heroOne.jpg';
import heroTwo from '../style/heroTwo.jpg';
import heroThree from '../style/heroThree.jpg';

function BookPage() {
    const navigate = useNavigate();

    function formSubmission(){

    }
    

  return (
    
    /*
    <Link to="/service">Go to Input Page</Link>;    
    <button onClick={() => navigate("/service")}>Start</button>;
    */
    <>
    <div className = "headerContainer">
        <div className = "logoContainer">
            <div className= "logoImage">
                
            </div>
            <div className= "logoText">
                Reborn Independent Living
            </div>
        </div>
    </div>
    <div className = "navbarContainer">
        <button className = "navButton" onClick={() => navigate("/")}>Home</button>
        <button className = "navButton" onClick={() => navigate("/service")}>Services</button>
        <button className = "navButton" onClick={() => navigate("/book")}>Book an Appointment</button>
        <button className = "navButton" onClick={() => navigate("/about")}>About</button>
    </div>
    <div className="partition" style = {{border: 0}}></div>

    <div className = "contentContainer">
        <div className='bookingFormContainer'>
          <form>
            <label>Enter your name:
              <input id = "name" type="text" />
            </label>
            <input type="submit" value="Submit" onClick = {formSubmission}/>
          </form>
        </div>
    </div>

    <div className="partition"></div>
    <div className = "bumperContainer">
        <h3>Resources</h3>
        <a href=""> Contact Us </a>
        <a href=""> FAQs </a>
        <a href=""> Book an Appointment </a>
    </div>
    <div className = "rightsContainer">
        <center> <i>All Rights Reserved © 2025</i> </center>
    </div>

    </>
  );
}

export default BookPage;
