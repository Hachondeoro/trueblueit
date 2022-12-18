import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Slider,
  TitleHeading,
  IconBox,
  About,
  Service,
  Project,
  ServicesBox,
  Testimonial,
  Overview,
  Faq,
  Partner,
} from '../layouts/home01/index';
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index';

class Home01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          logoweb: 'assets/img/trueblue-logo.png',
          names: 'Home',
        },
      ],
      headingchoose: [
        {
          id: 1,
          classnames: 'heading',
          title: 'True Blue IT Services',
          text: 'True Blue IT Services is a managed IT servicesprovider that offers a wide range of IT services tobusinesses. We offer IT support, cloudcomputing, data backup and recovery, managedhosting, business continuity, and managedsecurity services. We provide our clients withpeace of mind knowing that their IT infrastructureis in the hands of a reliable and experienced team.',
          classtext: 'sub-heading',
        },
      ],
      headingservice: [
        {
          id: 1,
          classnames: 'heading',
          title: 'Services',
          text: 'IT Support: We provide 24/7 IT support services to our customers. Our services include technical support, troubleshooting, system maintenance, software installation, and hardware repairs. We also provide remote support, on-site support, and emergency support. Our team of experienced IT professionals is available to assist you with any IT-related issue. We also provide training and consulting services to help you improve your IT infrastructure. We strive to provide the best customer service and satisfaction to our customers.',
          classtext: 'sub-heading',
        },
      ],
      headingproject: [
        {
          id: 1,
          classnames: 'heading text-white',
          title: 'FEATURED PROJECT',
          classtext: 'sub-heading',
        },
      ],
      servicebox: [
        {
          id: 1,
          classnames: 'heading font-size-30',
          title: 'Microsoft 365 Training services:',
          classtext: 'sub-heading font-weight-400',
          text: 'If you need',
        },
      ],
    };
  }

  render() {
    return (
      <div className="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
        <div id="wrapper" className="animsition">
          <div id="page" className="clearfix">
            <div id="site-header-wrap">
              {/*<TopBar />*/}
              {this.state.headers.map((data, idx) => (
                <Header data={data} key={idx} />
              ))}
            </div>
            <div id="main-content" className="site-main clearfix">
              <div id="content-wrap">
                <div id="site-content" className="site-content clearfix">
                  <div id="inner-content" className="inner-content-wrap">
                    <div className="page-content">
                      <div className="rev_slider_wrapper fullwidthbanner-container">
                        <div id="rev-slider1" className="rev_slider fullwidthabanner">
                          <Slider />
                        </div>
                      </div>
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
                              <div className="elm-button text-center">
                                <Link to="#" className="themesflat-button bg-accent">
                                  ABOUT US
                                </Link>
                              </div>
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
                      <div className="row-services">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={60}
                                data-mobile={60}
                                data-smobile={60}
                              />
                              {this.state.headingservice.map(data => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={39}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <Service />
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={50}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <div className="elm-button text-center">
                                <Link to="#" className="themesflat-button bg-accent">
                                  ALL SERVICES
                                </Link>
                              </div>
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
                      {/*<div className="row-project parallax parallax-1 parallax-overlay">*/}
                      {/*  <div className="project-overlay">*/}
                      {/*    <div className="container-fluid">*/}
                      {/*      <div className="row">*/}
                      {/*        <div className="col-md-12">*/}
                      {/*          <div*/}
                      {/*            className="themesflat-spacer clearfix"*/}
                      {/*            data-desktop={60}*/}
                      {/*            data-mobile={60}*/}
                      {/*            data-smobile={60}*/}
                      {/*          />*/}
                      {/*          {this.state.headingproject.map(data => (*/}
                      {/*            <TitleHeading data={data} key={data.id} />*/}
                      {/*          ))}*/}
                      {/*          <div*/}
                      {/*            className="themesflat-spacer clearfix"*/}
                      {/*            data-desktop={30}*/}
                      {/*            data-mobile={35}*/}
                      {/*            data-smobile={35}*/}
                      {/*          />*/}

                      {/*          <Project />*/}
                      {/*          <div*/}
                      {/*            className="themesflat-spacer clearfix"*/}
                      {/*            data-desktop={41}*/}
                      {/*            data-mobile={35}*/}
                      {/*            data-smobile={35}*/}
                      {/*          />*/}
                      {/*          <div className="elm-button text-center">*/}
                      {/*            <Link to="#" className="themesflat-button bg-accent">*/}
                      {/*              ALL PROJECTS{' '}*/}
                      {/*            </Link>*/}
                      {/*          </div>*/}
                      {/*          <div*/}
                      {/*            className="themesflat-spacer clearfix"*/}
                      {/*            data-desktop={73}*/}
                      {/*            data-mobile={60}*/}
                      {/*            data-smobile={60}*/}
                      {/*          />*/}
                      {/*        </div>*/}
                      {/*      </div>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
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
                              {this.state.servicebox.map(data => (
                                <TitleHeading data={data} key={data.id} />
                              ))}
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={57}
                                data-mobile={35}
                                data-smobile={35}
                              />
                              <ServicesBox />
                              <div className="row">
                                <div className="col-md-12">
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
                      {/*<Testimonial />*/}
                      {/*<div className="row-quote bg-row-1">*/}
                      {/*  <div className="container">*/}
                      {/*    <div className="row">*/}
                      {/*      <div className="col-md-12">*/}
                      {/*        <div*/}
                      {/*          className="themesflat-spacer clearfix"*/}
                      {/*          data-desktop={40}*/}
                      {/*          data-mobile={60}*/}
                      {/*          data-smobile={60}*/}
                      {/*        />*/}
                      {/*        <div className="themesflat-quote style-1 clearfix">*/}
                      {/*          <div className="quote-item">*/}
                      {/*            <div className="inner">*/}
                      {/*              <div className="heading-wrap">*/}
                      {/*                <h3 className="heading">START EXECUTING YOUR PROJECT</h3>*/}
                      {/*              </div>*/}
                      {/*              <div className="button-wrap has-icon icon-left">*/}
                      {/*                <Link to="#" className="themesflat-button bg-white small">*/}
                      {/*                  <span>*/}
                      {/*                    (+613) 8376 6284{' '}*/}
                      {/*                    <span className="icon">*/}
                      {/*                      <i className="autora-icon-phone-contact" />*/}
                      {/*                    </span>*/}
                      {/*                  </span>*/}
                      {/*                </Link>*/}
                      {/*              </div>*/}
                      {/*            </div>*/}
                      {/*          </div>*/}
                      {/*        </div>*/}
                      {/*        <div*/}
                      {/*          className="themesflat-spacer clearfix"*/}
                      {/*          data-desktop={31}*/}
                      {/*          data-mobile={60}*/}
                      {/*          data-smobile={60}*/}
                      {/*        />*/}
                      {/*      </div>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      <div className="row-tabs">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div
                                className="themesflat-spacer clearfix"
                                data-desktop={61}
                                data-mobile={60}
                                data-smobile={60}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <Overview />
                            <Faq />
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

export default Home01;
