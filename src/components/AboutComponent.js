import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/1.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">New culture on the XRPL</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                xRonin is dedicated to exploring the XRP Ledger and unleashing
                its potential. As the principal guardians of the XRP Ledger, we
                shoulder the responsibility of protecting and investing in the
                XRPL ecosystem. Our commitment is driven by the vision of a
                thriving ecosystem, with every decision and action deliberately
                designed to foster its growth.
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://twitter.com/xRoninFed"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/twitter.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Twitter</span>
              </a>
              <a
                href="https://discord.com/invite/FSreWHSbyA"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/2.gif" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">High Quality NFT Collection</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                xRonin represents the Turtle Ronins within the dynamic XRPL
                ecosystem. Every piece of art we create is not merely a design
                but a unique expression, embodying the vision and philosophy we
                intend to instill within the XRP Ledger ecosystem.
              </p>
              <p>
                As a member of the xRonin Federation, come create a new culture
                within the XRPL with us. Incredible journeys are awaiting you.
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://docs.web3mon.io/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button only_text"
              >
                <span className="text">More About US</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
