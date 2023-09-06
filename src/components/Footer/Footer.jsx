import React from "react";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <h5>Drivehub Co.,Ltd</h5>
        <p>
          193-195 Lake Rajada Office Complex,
          <br />
          Ratchadapisek road, Khlong Toei, Bangkok
        </p>
      </div>
      <div>
        <h5 className="footer__title mb-3"> © Drivehub 2023</h5>
      </div>
    </footer>
  );
};

export default Footer;
