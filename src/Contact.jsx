import  React, { useRef, useEffect, useState} from "react";
import { gsap ,Expo} from "gsap";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Contact=()=> {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "574c9f9c-42d0-47a9-9fe6-a537f2625547");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
      title: "Success!",
      text: "Message sent success!",
      icon: "success"
    });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return(
    <div className="contact">
      <form onSubmit={onSubmit}>
        <h2 className="text-black">Contact Form</h2>
          <div className="input-box">
            <label className="">Full Name</label>
            <input type="text" className="field" name="name" placeholder="Enter your name" required/>
          </div>

          <div className="input-box">
            <label className="">Email Address</label>
            <input type="email" className="field" name="email" placeholder="Enter your email" required/>
          </div>

          <div className="input-box">
            <label className="">Your Message</label>
            <textarea type="" className="field mess" name="message" placeholder="Enter your Message" required></textarea>
          </div>

          <button type="submit">Send Message</button>   
          
      </form>
    </div>
  )
};

export default Contact;