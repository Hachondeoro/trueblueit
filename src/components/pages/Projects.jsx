import React, { Component } from "react";
import { Link } from "react-router-dom";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
import { TabProject } from "../layouts/home02";

class Projects extends Component {
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
          links: "",
          titlelink: "",
          border: "",
          name: "Projects",
          heading: "Projects Grid",
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
                      <div className="row-services">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={73}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              <ul className="themesflat-filter style-1 clearfix">
                                <li className="active">
                                  <Link to="#" data-filter="*">
                                    All
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" data-filter=".green">
                                    GREEN HOUSE
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" data-filter=".architecture">
                                    ARCHITECTURE{" "}
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" data-filter=".construction">
                                    CONSTRUCTION{" "}
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" data-filter=".villa">
                                    VILLA
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" data-filter=".building">
                                    BUILDING
                                  </Link>
                                </li>
                              </ul>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={40}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <TabProject />
                              <div className="button-wrap has-icon icon-left size-14 pf21 text-center">
                                <Link
                                  to="#"
                                  className="themesflat-button bg-accent pd32"
                                >
                                  <span>
                                    LOAD MORE{" "}
                                    <span className="icon">
                                      <i className="ion-load-c" />
                                    </span>
                                  </span>
                                </Link>
                              </div>
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={72}
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

export default Projects;
