import React, { Component } from "react";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
import { ContentProject, RelateProject, Sidebar } from "../layouts/project";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: "assets/img/trueblue-logo.png",
          names: "Projects",
        },
      ],
      banners: [
        {
          id: 1,
          links: "/project",
          titlelink: "Projects ",
          border: "|",
          name: "Project Single",
          heading: "Project Name",
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
                      <div className="row-project-detail">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={60}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              <div className="detail-inner-wrap">
                                <Sidebar />
                                <ContentProject />
                              </div>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={58}
                                data-mobile={60}
                                data-smobile={60}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="themesflat-lines style-1 line-full line-solid clearfix">
                                <span className="line" />
                              </div>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={46}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <div className="themesflat-headings style-2 clearfix">
                                <h2 className="heading">RELATED PROJECTS</h2>
                                <div className="sep has-width w80 accent-bg margin-top-3 clearfix" />
                              </div>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={35}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <RelateProject />
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={80}
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

export default ProjectDetail;
