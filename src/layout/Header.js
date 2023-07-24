import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
        <div className="trigger_in" onClick={() => setToggle(false)}>
            {/* <span className="text">Close</span> */}
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              <li className="menu-item menu-item-has-children">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setHomeToggle(!homeToggle);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://docs.web3mon.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="full_link"
                >
                  Whitepaper
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://game-v1.web3mon.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="full_link"
                >
                  Demo Game
                </a>
              </li>
              {/* <li className="menu-item">
                <a
                  href="https://drive.google.com/file/d/1_zVtsEb95VAS3qOtvmqgH_GWZJTVnpvS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="full_link"
                >
                  Demo Game Guidance
                </a>
              </li> */}
              <li className="menu-item">
                <a
                  href="https://drive.google.com/file/d/10ycxtygaL_h6RB4DPnmUYRUMrM66P3jE/view"
                  target="_blank"
                  rel="noreferrer"
                  className="full_link"
                >
                  Pitch Deck
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="mailto:hello@web3mon.io"
                  target="_blank"
                  rel="noreferrer"
                  className="full_link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav_buttons">
            <a
              href="https://opensea.io/"
              className="neoh_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <img src="svg/opensea.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">OpenSea</span>
            </a>
            <a
              href="https://discord.com/"
              className="neoh_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <img src="svg/discord.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p>
              Copyright 2022- Designed &amp; Developed by{" "}
              <a
                style={{ fontWeight: "bolder" }}
                href="mailto:jaewon@web3mon.io"
                target="_blank"
                rel="noreferrer"
              >
                Jaewon
              </a>
            </p>
          </div>
          <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a
                    href="https://twitter.com/web3mon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fn-icon-twitter" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://discord.com/invite/FSreWHSbyA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="svg/discord.svg" alt="" className="fn__svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="img/logo.png" alt="" />
                </a>
              </Link>
            </div>

            <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                <div className="trigger_in">
               
                  <span className="hamb">
                    <span className="hamb_a" />
                    <span className="hamb_b" />
                    <span className="hamb_c" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
