import React from "react";
import {BsTwitter} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'
export const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <a>Home</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Privacy Policy</a>
        <a>Sitemap</a>
      </div>
      <div>
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      </div>
      <div>
        <BsTwitter  />
        <BiLogoLinkedin />
      </div>
    </footer>
  );
};
