import React, { Component } from "react";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { FormContact02, IconBox } from "../layouts/contact";
import { TitleHeading } from "../layouts/home01/index";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";

class Contact02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/trueblue-logo.png",
          names: "Contact",
        },
      ],
      banners: [
        {
          id: 1,
          links: "",
          titlelink: "",
          border: "",
          name: "Contact",
          heading: "Contact Us",
        },
      ],
      headingcontact: [
        {
          id: 1,
          classnames: "heading",
          title: "CONTACT US",
          text: "Are you interested in finding out how Autora Construction Services can make your project a success? For more information on our services please contact us.",
          classtext:
            "sub-heading font-weight-400 max-width-770 line-height-26 margin-top-14",
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
                      <div className="row-iconbox">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={61}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              {this.state.headingcontact.map((data) => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={45}
                                data-mobile={35}
                                data-smobile={35}
                              />
                            </div>
                          </div>
                          <IconBox />
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={58}
                                data-mobile={35}
                                data-smobile={35}
                              />
                            </div>
                          </div>
                          <FormContact02 />
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
    );
  }
}

export default Contact02;
