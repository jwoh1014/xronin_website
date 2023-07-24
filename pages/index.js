import AboutComponent from "../src/components/AboutComponent";
import BlogComponent from "../src/components/BlogComponent";

import Drops from "../src/components/Drops";
import ServicesComponent from "../src/components/ServicesComponent";

import WhyChooseUsComponent from "../src/components/WhyChooseUsComponent";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout pageName={"Home Static"}>
      <div className="neoh_fn_hero">
        <div className="bg_overlay">
          <div className="bg_color" />

          <div className="bg_image" data-bg-img="img/hero/bg.png" />
        </div>

        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h3 className="fn_desc fn_animated_text" style={{fontSize : '50px'}}>
                xRonin Federation Unleash the power of XRP Ledger
              </h3>
            </div>
          </div>
          <a
            href="#about"
            className="neoh_fn_down magic-hover magic-hover__square"
          >
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>

      <AboutComponent />

      <ServicesComponent />
{/* <BlogComponent/> */}
      {/* <Drops /> */}

      {/* <WhyChooseUsComponent /> */}
    </Layout>
  );
};
export default Index;
