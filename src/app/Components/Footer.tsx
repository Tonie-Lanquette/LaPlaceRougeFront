import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white py-3 text-base flex justify-between items-center ">
        <p className="text-white text-base md:text-xl ml-8">
          La Place{" "}
          <span className="text-[#FF0202] text-base md:text-xl">R</span>
          ouge
          <br />
          8 rue Casimir Perrier
          <br />
          38000 Grenoble
        </p>

        <div className="flex space-x-3 md:space-x-7 mr-8">
          <a
            href="https://x.com/?lang=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/twitter.png"
              alt="Twitter"
              className="w-5 h-5 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-5 h-5 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-5 h-5 md:w-8 md:h-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
