import "./ContactFormCover.scss";

const ContactFormCover = ({ onClick }) => {
  return (
    <div onClick={onClick} className="contact-form-cover">
      <h2 className="contact-form-cover__text">
        DROP ME A{" "}
        <span>
          <a href="mailto:paulmichaelhardman@gmail.com">LINE</a>
        </span>
      </h2>
      <p>paulmichaelhardman@gmail.com</p>
    </div>
  );
};

export default ContactFormCover;
