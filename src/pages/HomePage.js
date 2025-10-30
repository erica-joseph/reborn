import logo from '../logo.svg';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import '../style/style.css';

//Images for cards
import cardOne from '../style/logo192.png';
import cardTwo from '../style/logo192.png';

//Images for Hero
import heroOne from '../style/heroOne.jpg';
import heroTwo from '../style/heroTwo.jpg';
import heroThree from '../style/heroThree.jpg';

function HomePage() {
    const navigate = useNavigate();

    const cards = [
        {id: 1, img: cardOne, descriptor: "This is a thing"},
        {id: 2, img: cardTwo, descriptor: "This is a thing too"}
    ];

    const hero = [
        {id: 1, img: heroOne, text: "First"},
        {id: 2, img: heroTwo, text: "Second"},
        {id: 2, img: heroThree, text: "Third"}
    ];


 const [index, setIndex] = useState(0);

  const openLeft = () => {
    console.log(index);
    console.log(hero.length);
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


  return (

    /*
    <Link to="/service">Go to Input Page</Link>;    
    <button onClick={() => navigate("/service")}>Start</button>;
    */
    <>
    <div className = "headerContainer">
        <div className = "logoContainer">
            <div className= "logoImage">
                LOGO
            </div>
            <div className= "logoText">
                Reborn Independent Living
            </div>
        </div>
    </div>
    <div className = "navbarContainer">
        <button className = "navButton" onClick={() => navigate("/")}>Home</button>;
        <button className = "navButton" onClick={() => navigate("/service")}>Services</button>;
        <button className = "navButton" onClick={() => navigate("/book")}>Book an Appointment</button>;
        <button className = "navButton" onClick={() => navigate("/about")}>About</button>;
    </div>
    <div className = "contentContainer">

        <div className= "heroContainer" style = {{ backgroundImage: `url(${hero[index].img})` }}>
            <div className="heroLeft" onClick={openLeft}>Left</div>
            <div className="heroText"> {hero[index].text}  </div>
            <div className="heroRight" onClick={openRight}>Right</div>
        </div>

        <div className= "welcomeTitle">
        Welcome to Reborn!
        </div>
        <div className= "welcomeBlurb">
        Reborn is a Independent Living Company.
        </div>
        <div className="cardsContainer">
        {cards.map((card, index) => (
        <div key = {card.id} className= "cardContainer">
            <div className= "cardThumbnail">
            <img src={card.img}/>
            </div>
            <div className= "cardDescriptor">
            <p>{card.descriptor}</p>
            </div>
        </div>
        ))}
        </div>
    </div>
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

export default HomePage;
