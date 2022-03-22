import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Footer__message">{`Made with </> Paul Hardman 2022`}</p>

      <ul className="Footer__links">
        <a
          className="Footer__links-sectionLink"
          href="https://medium.com/@paulmichaelhardman"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
        <a
          className="Footer__links-sectionLink"
          href="https://github.com/singapaul"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="Footer__links-sectionLink"
          href="https://www.linkedin.com/in/paul-hardman-1199b6108/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </ul>
    </div>
  );
};

export default Footer;
