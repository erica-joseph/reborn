import logo from '../logo.svg';
import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import '../style/style.css';

function BookPage() {
    const navigate = useNavigate();
    const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevents page refresh
    processText(text);  // Send to your function
  }

  const form = useRef();

  function processText(input) {
    console.log("Sending text:", input);
    // You can do whatever you want here — API call, display, etc.
  }
    
  function sendEmail(e) {
    e.preventDefault(); // This is important, i'm not sure why, but the email won't send without it

    emailjs

      .sendForm('sseulmoo@gmail.com', 'template_st958vg', form.current, {
        publicKey: '7jQlZnhX5YXbGZ_Fb',
      })

      .then(
        (result) => {
          alert('Email sent!');
           // This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <form ref={form}  onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="from_name" id="from_name"/>
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Message</label>
            <textarea name="html_message" />
            <input type="submit" value="Send" />
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
