const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">What is xRonin Federation?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">XRP Ledger</h3>
                  <p className="fn_desc ">
                    We are fully committed to the XRPL ecosystem, directing all
                    our efforts towards nurturing and growing this boundless
                    digital environment. We remain steadfast in our dedication
                    to unlock the immense potential that the XRPL ecosystem
                    holds.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Ecosystem</h3>
                  <p className="fn_desc ">
                    As a form of investment DAO, we will focus on facilitating
                    the initial expansion of the XRPL ecosystem. As a starting
                    point for building XRPL, we are ready to actively support
                    and contribute to the proliferation of numerous projects to
                    help them move to the next level of growth.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Community</h3>
                  <p className="fn_desc ">
                    xRonin Federation has plans to invest in early XRPL
                    projects, build NFT staking, issue our own tokens, and even
                    launch actual merchandise. Our initiatives prioritize xRonin
                    holders and everything we do is geared towards meeting our
                    community's needs and aspirations.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Team</h3>
                  <p className="fn_desc ">
                    We are working tremendously hard to create a community that
                    is of the community, by the community, and for the
                    community, unlike any other. We are confident that we will
                    all share in the joy of our collective achievements at the
                    end of this journey. Would you join us on this mission?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
