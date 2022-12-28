import React, { Component } from 'react';
import BannerTitle from '../layouts/about/banner/BannerTitle';
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index';
import { ServiceSlide } from '../layouts/services/index';
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: 'assets/img/trueblue-logo.png',
          names: 'Services',
        },
      ],
      banners: [
        {
          id: 1,
          links: '',
          titlelink: '',
          border: '',
          name: 'Services',
          heading: 'All Services',
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
            {this.state.banners.map(data => (
              <BannerTitle key={data.id} data={data} />
            ))}
            <div id="main-content" className="site-main clearfix">
              <div id="content-wrap">
                <div id="site-content" className="site-content clearfix">
                  <div id="inner-content" className="inner-content-wrap">
                    <div className="page-content">
                      <ServiceSlide />
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

export default Services;
