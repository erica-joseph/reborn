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

function ServicePage() {
    const navigate = useNavigate();

    const mainRef = useRef(null);

    const cards = [
        {id: 1, img: cardOne, descriptor: "This is a thing"},
        {id: 2, img: cardTwo, descriptor: "This is a thing too"}
    ];

    const hero = [
        {id: 1, img: heroOne, text: "Reborn Indpendent Living"},
        {id: 2, img: heroTwo, text: "Your care comes first"},
        {id: 2, img: heroThree, text: "Reclaim your life"}
    ];


 const [index, setIndex] = useState(0);

  const openLeft = () => {
    console.log(index);
    if(index > 0){
    setIndex((prevIndex) => (prevIndex - 1) % hero.length);
    }
    else if(index == 0){
        setIndex((hero.length)-1);
    }
  };

  const openRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % hero.length);
  };

useEffect(() => {
    const curr = mainRef.current;
    if (!curr) return;
    curr.style.backgroundImage = `url(${hero[index].img})`;
    curr.style.animation = "none";
    void curr.offsetWidth;
    curr.style.animation = "heroFade";
    curr.style.animationDuration = "8s";
    curr.style.animationDirection = "forwards";
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % hero.length);
    }, 8000);
    return () => clearTimeout(timeout);
  }, [index, hero]); 

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

export default ServicePage;
