import React, { useState } from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fhlpuqw",
        "template_9gfi4oj",
        form.current,
        "AIID316cIY8jbJK_p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
    );
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-mail" />
            <h4>Email</h4>
            <h5>altonyyasser@gmail.com</h5>
            <a href="mailto:altonyyasser@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-messenger" />
            <h4>Messenger</h4>
            <h5>Yasser Toni</h5>
            <a href="https://m.me/YasserTonii" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-whats" />
            <h4>WhatsApp</h4>
            <h5>+2 01029692906</h5>
            <a href="https://wa.me/00201029692906" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <textarea
            rows={7}
            name="message"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Send Your Message Now!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
