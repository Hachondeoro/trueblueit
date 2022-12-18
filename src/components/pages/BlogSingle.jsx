import React, { Component } from "react";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { SidebarBlog, SingleContent } from "../layouts/blog";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";

class BlogSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/trueblue-logo.png",
          names: "Blog",
        },
      ],
      banners: [
        {
          id: 1,
          links: "/blog",
          titlelink: "Blog",
          border: "|",
          name: "Blog Single",
          heading: "Blog Single",
        },
      ],
    };
  }
  render() {
    return (
      <div className="header-fixed sidebar-right header-style-2 topbar-style-1 menu-has-search">
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
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={60}
                  data-mobile={60}
                  data-smobile={60}
                />
                <SingleContent />
                <SidebarBlog />
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={80}
                  data-mobile={60}
                  data-smobile={60}
                />
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

export default BlogSingle;
