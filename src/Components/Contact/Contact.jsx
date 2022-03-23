import "./Contact.scss";
import contact from "../../Assets/Graphics/contact.png";
import Contactform from "../../Components/Contactform/Contactform";
import ContactFormCover from "../ContactFormCover/ContactFormCover";
import { useState } from "react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__content-graphic">
          <img className="contact__content-graphic-img" src={contact} alt="" />
        </div>
        <div className="contact__content-form">
          {false ? <Contactform /> : <ContactFormCover onClick = {handleClick} />}
        </div>
      </div>

      <div className="contact__greeting">
        <h1 className="contact__greeting-title">Get in touch</h1>
      </div>
    </div>
  );
};

export default Contact;
