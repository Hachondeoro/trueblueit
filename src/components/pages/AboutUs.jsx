import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Counter, LeaderTeam } from '../layouts/about';
import BannerTitle from '../layouts/about/banner/BannerTitle';
import { TitleHeading, IconBox, About, Overview, Faq, Partner } from '../layouts/home01/index';
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: 'assets/img/trueblue-logo.png',
          names: 'About Us',
        },
      ],
      headingchoose: [
        {
          id: 1,
          classnames: 'heading',
          title: 'About True Blue IT services',
          text: "True Blue IT service provides end-to-end business solutions for integrating business processes by leveraging information technology. True Blue IT service provide solutions for a dynamic environment where business and technology strategies converge. True Blue IT service offers various enterprise suitable business models to the customers to ensure competitive advantage.\n\n True Blue IT service specialize in IT infrastructure and management services providing and helping enterprises to optimize, transform and manage their IT infrastructure. Solutions help in reducing capital and operational costs with higher performance utilization. By managing IT infrastructure smartly and leveraging True Blue IT service's solutions, customers can improve total cost of ownership.\n\n We at True Blue IT service offer a unique value proposition to the esteemed clients. True Blue IT service offers the complete range of software products & services options for organizations across industry segments. True Blue IT service's clients can take full advantage of deep association with major international and national IT specialist companies. True Blue IT service's enterprise solutions provides in-depth business, product, and industry expertise, that enables customer to quickly realize their business objectives.\n",
          classtext: 'sub-heading',
        },
      ],
      headingchoose2: [
        {
          id: 1,
          classnames: 'heading',
          title: 'Product Solutions & Offerings',
          text:
            'The company leads with expertise in delivering IT based infrastructure and other enterprise solutions. True Blue IT service offers world class solutions that leverage the power of collaboration, people, ideas and relationships. Partnering with very large technology companies globally, True Blue IT service meets the requirements of various industry vertical.\n' +
            ' \n' +
            'True Blue IT service helps startups to setup their IT infrastructure to leverage their present solutions. By offering planning, designing and deployment services, helps customer to achieve simplified operations, improved ROI, Increased utilization and optimized performance of existing infrastructure. Consulting team and talented staff work closely with the customer to understand their business requirements and align their business processes with IT to achieve optimum efficiency from deployed IT infrastructure. This helps customer to align their people, process and technology to contribute to an agile enterprise environment. True Blue IT service offers strategic solutions to variety of industry vertical in present competitive environment.\n',
          classtext: 'sub-heading',
        },
      ],
      banners: [
        {
          id: 1,
          links: '',
          titlelink: '',
          border: '',
          name: 'About Us',
          heading: 'About Us',
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
                      <div className="row-iconbox">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={60}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              {this.state.headingchoose.map(data => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={42}
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
                                data-desktop={41}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={73}
                                data-mobile={60}
                                data-smobile={60}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <About />
                      <Counter />
                      {this.state.headingchoose2.map(data => (
                        <TitleHeading data={data} key={data.id} />
                      ))}
                      <LeaderTeam />
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

export default AboutUs;
