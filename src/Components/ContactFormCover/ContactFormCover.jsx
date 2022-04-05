import "./ContactFormCover.scss";

const ContactFormCover = ({ onClick }) => {
  return (
    <div onClick={onClick} className="contact-form-cover">
      <p className="contact-form-cover__question">Interested?</p>
      <h2 className="contact-form-cover__text">
        DROP ME A <span>LINE</span>
      </h2>
      <a
        className="contact-form-cover__email"
        href="mailto:paulmichaelhardman@gmail.com"
      >
        {" "}
        <p>paulmichaelhardman@gmail.com</p>
      </a>
    </div>
  );
};

export default ContactFormCover;
