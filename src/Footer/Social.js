import React from 'react';
import pin from "../assets/images/pinterest.png";
import fb from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import insta from "../assets/images/instagram.png";
import snap from "../assets/images/snapchat.png";
import youtb from "../assets/images/youtube.png";

const Social = () => {
  return (
    <div className="footer-social text-center">
        <h6>Follow Us</h6>
        <ul>
          <li>
            <a className="f" href="https://www.facebook.com/kyazoonga" target="blank" rel="me">
              <img src={fb} alt="Facebook" width="32" height="32"/>
            </a>
          </li>
          <li>
            <a className="t" href="https://twitter.com/kyazoonga" target="blank" rel="me">
              <img src={twitter} alt="Twitter" width="32" height="32"/>
            </a>
          </li>
          <li>
            <a className="ig" href="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
              <img src={insta} alt="in" width="32" height="32"/>
            </a>
          </li>
          <li>
            <a className="sc" href="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
              <img src={snap} alt="in" width="32" height="32"/>
            </a>
          </li>
         
          <li>
            <a className="yt" href="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
              <img src={youtb} alt="Youtube" width="32" height="32"/>
            </a>
          </li>
          
          <li>
            <a className="p" href="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
              <img src={pin} alt="Pinterest" width="32" height="32"/>
            </a>
          </li>
        </ul>
        <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
      </div>

  );
};

export default Social;