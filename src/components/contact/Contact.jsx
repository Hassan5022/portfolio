import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const [formFields, setFormFields] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDone(false);
    setError(null);

    // Check if all fields have values
    if (
      !formFields.user_name ||
      !formFields.user_email ||
      !formFields.message
    ) {
      setError("Please fill in all the fields");
      return;
    }
    setIsPending(true);

    // Send form data if all fields have values
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setIsPending(false);
          setError(null);
          form.current.reset();
          setFormFields({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setDone(false);
          setError("Something went wrong!");
          setIsPending(false);
          form.current.reset();
          setFormFields({
            user_name: "",
            user_email: "",
            message: "",
          });
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={formFields.user_name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={formFields.user_email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            value={formFields.message}
            onChange={handleInputChange}
            className="user"
            placeholder="Message"
          />
          {!isPending && (
            <input type="submit" value="Send" className="button" />
          )}
          {isPending && (
            <input
              type="submit"
              value="Sending..."
              disabled
              style={{ cursor: "not-allowed" }}
              className="button"
            />
          )}
          {done && <span>Thanks for Contacting me</span>}
          {error && <span style={{ color: "red" }}>{error}</span>}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
