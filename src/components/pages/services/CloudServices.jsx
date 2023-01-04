import React, { Component } from 'react';
import BannerTitle from 'components/layouts/about/banner/BannerTitle';
import { BottomBar, Footer, Header, TopBar } from 'components/layouts/general/index';
import { request } from 'datoCMS/request.ts';
import parse from 'html-react-parser';

class CloudServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: '/assets/img/trueblue-logo.png',
          names: 'Services',
        },
      ],
      banners: [
        {
          id: 1,
          links: '/services',
          titlelink: 'Services',
          border: '',
          name: '',
          heading: 'All Services',
        },
      ],
    };
  }
  componentDidMount() {
    request(
      `cloudservice{
        title
        content
      }`,
    ).then(data => {
      console.log(data);
      this.setState({
        data: data.cloudservice,
      });
    });
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
                      <div className="container">
                        <div>
                          {this.state.data ? (
                            <>
                              <div className="themesflat-headings style-1 text-center clearfix">
                                <h1>{this.state.data.title}</h1>
                              </div>
                              {parse(this.state.data.content)}
                            </>
                          ) : null}
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

export default CloudServices;
