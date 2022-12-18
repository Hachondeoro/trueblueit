import React, { Component } from "react";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
import Pricing from "../layouts/testimonial/Pricing";

class PricePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/trueblue-logo.png",
          names: "Page",
        },
      ],
      banners: [
        {
          id: 1,
          links: "/page-testimonial",
          titlelink: "Page",
          border: "|",
          name: "Pricing",
          heading: "Pricing",
        },
      ],
    };
  }
  render() {
    return (
      <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
        <div id="wrapper" className="animsition">
          <div id="page" className="clearfix">
            <div id="site-header-wrap">
              <TopBar />
              {this.state.headers.map((data, idx) => (
                <Header data={data} key={idx} />
              ))}
            </div>
            {this.state.banners.map((data) => (
              <BannerTitle key={data.id} data={data} />
            ))}
            <div id="main-content" className="site-main clearfix">
              <div id="content-wrap">
                <div id="site-content" className="site-content clearfix">
                  <div id="inner-content" className="inner-content-wrap">
                    <div className="page-content">
                      <div className="row-pricing">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={60}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              <div className="themesflat-headings style-1 text-center clearfix">
                                <h2 className="heading">PRICING</h2>
                                <div className="sep has-icon width-125 clearfix">
                                  <div className="sep-icon">
                                    <span className="sep-icon-before sep-center sep-solid" />
                                    <span className="icon-wrap">
                                      <i className="autora-icon-build" />
                                    </span>
                                    <span className="sep-icon-after sep-center sep-solid" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={27}
                                data-mobile={27}
                                data-smobile={27}
                              />
                              <Pricing />
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={81}
                                data-mobile={60}
                                data-smobile={60}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
            {this.state.headers.map((data, idx) => (
              <BottomBar data={data} key={idx} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PricePage;
