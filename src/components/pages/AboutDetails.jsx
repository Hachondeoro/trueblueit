import React, { Component } from "react";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { SideBar, SiteContent } from "../layouts/about/detail";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
class AboutDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/trueblue-logo.png",
          names: "About Us",
        },
      ],
      banners: [
        {
          id: 1,
          links: "/about-us",
          titlelink: "About Us",
          border: "|",
          name: " About us detail",
          heading: "Who we are?",
        },
      ],
    };
  }
  render() {
    return (
      <div className="header-fixed page sidebar-right width-71 header-style-2 topbar-style-1 menu-has-search">
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
              <div id="content-wrap" className="container">
                <SiteContent />
                <SideBar />
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

export default AboutDetails;
