const Footer = () => {
  return ( 
    <footer className="footer">
    <div className="footer__body">
      <div className="footer__socials">
        <div className="header__logo">
          <img src="img/icons/logo.png" alt="" />
          <span>Spinfluence</span>
        </div>
        <div className="footer__socials-list">
          <a href="#" className="footer__social">
            <img src="img/icons/twitter.png" alt="" />
          </a>
          <a href="#" className="footer__social">
            <img src="img/icons/facebook.png" alt="" />
          </a>
          <a href="#" className="footer__social">
            <img src="img/icons/google-plus.png" alt="" />
          </a>
        </div>
      </div>
      <div className="footer__solution">
        <div className="footer__title">Solution</div>
        <a href="#" className="footer__text">
          Finance Strategy
        </a>
        <a href="#" className="footer__text">
          Advertising
        </a>
        <a href="#" className="footer__text">
          SMM
        </a>
        <a href="#" className="footer__text">
          SEO
        </a>
        <a href="#" className="footer__text">
          Google AdWords
        </a>
      </div>
      <div className="footer__company">
        <div className="footer__title">Company</div>
        <a href="#" className="footer__text">
          8910 University Center Lane Suite 620 San Diego, CA 92102
        </a>
        <a href="#" className="footer__text">
          Phone 858-490-6910
        </a>
        <a href="#" className="footer__text">
          Fax 858-490-6985
        </a>
      </div>
      <div className="footer__links">
        <a href="#" className="footer__link">
          About
        </a>
        <a href="#" className="footer__link">
          Services
        </a>
        <a href="#" className="footer__link">
          Pricing
        </a>
        <a href="#" className="footer__link">
          Blog
        </a>
        <a href="#" className="footer__link">
          Contact
        </a>
      </div>
      <div className="footer__copyright">
        <p>© 2018 Casumi, Made by DeoThemes.</p>
      </div>
    </div>
  </footer>
   );
}
 
export default Footer;