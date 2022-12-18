import React, { Component } from "react";
import { Link } from "react-router-dom";
class SiteContent extends Component {
  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={60}
            data-smobile={60}
          />
          <div
            className="themesflat-carousel-box data-effect clearfix"
            data-gap={0}
            data-column={1}
            data-column2={1}
            data-column3={1}
            data-auto="true"
          >
            <div className="owl-carousel owl-theme">
              <div className="themesflat-gallery style-1 clearfix">
                <div className="gallery-item">
                  <div className="inner">
                    <div className="thumb">
                      <img
                        src="assets/img/gallery/gallery-1-840x357.jpg"
                        alt="imagealt"
                      />
                      <div className="text-wrap">
                        <span>We need you </span>
                        <h5 className="heading">to join our team !</h5>
                        <span>Apply now!</span>
                        <Link to="#" className="themesflat-button bg-accent">
                          APPLY NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="themesflat-gallery style-1 clearfix">
                <div className="gallery-item">
                  <div className="inner">
                    <div className="thumb">
                      <img
                        src="assets/img/gallery/gallery-1-840x357.jpg"
                        alt="imagealt"
                      />
                      <div className="text-wrap">
                        <span>We need you </span>
                        <h5 className="heading">to join our team !</h5>
                        <span>Apply now!</span>
                        <Link to="#" className="themesflat-button bg-accent">
                          APPLY NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={29}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-headings style-2 clearfix">
            <h2 className="heading">WE ARE HIRING</h2>
            <div className="sep has-width w80 accent-bg clearfix" />
            <p className="sub-heading font-size-16 line-height-28 text-666 margin-top-27 letter-spacing-01">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={22}
            data-mobile={22}
            data-smobile={22}
          />
          <div className="themesflat-accordions style-4 has-icon icon-right iconstyle-1 clearfix">
            <div className="accordion-item active">
              <h3 className="accordion-heading">
                <span className="inner">SALES ACCOUNT</span>
              </h3>
              <div className="accordion-content clearfix">
                <div className="themesflat-row clearfix">
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 22px 0 0px"
                      data-mobilemargin="0 22px 0 0px"
                    >
                      <h6 className="name">About us</h6>
                      <p>
                        Dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown.
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <h6 className="name">
                        We also offer the follow benefits:
                      </h6>
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Bonus programme for the shift teams
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">Flexible working hours</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Employer contribution for pension scheme or VWL
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Jobticket (discount for public transport){" "}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={0}
                      data-mobile={0}
                      data-smobile={35}
                    />
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 12px 0 0px"
                      data-mobilemargin="0 0 0 0"
                    >
                      <h6 className="name">Requirements</h6>
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              1-4 years of experience in Sales or Management
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Tech-oriented. You don’t need to be a developer,
                              but have to be passionate about tech, web,
                              eCommerce, and all its applications.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Excellent communication and negotiation skills..
                              Clear and convincing when you speak, you are also
                              attuned.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              You enjoy talking to clients, understanding their
                              problems, and closing deals.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-heading">
                <span className="inner">BUSINESS MANAGER</span>
              </h3>
              <div className="accordion-content clearfix">
                <div className="themesflat-row clearfix">
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 22px 0 0px"
                      data-mobilemargin="0 22px 0 0px"
                    >
                      <h6 className="name">About us</h6>
                      <p>
                        Dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown.
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <h6 className="name">
                        We also offer the follow benefits:
                      </h6>
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Bonus programme for the shift teams
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">Flexible working hours</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Employer contribution for pension scheme or VWL
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Jobticket (discount for public transport){" "}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={0}
                      data-mobile={0}
                      data-smobile={35}
                    />
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 12px 0 0px"
                      data-mobilemargin="0 0 0 0"
                    >
                      <h6 className="name">Requirements</h6>
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              1-4 years of experience in Sales or Management
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Tech-oriented. You don’t need to be a developer,
                              but have to be passionate about tech, web,
                              eCommerce, and all its applications.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Excellent communication and negotiation skills..
                              Clear and convincing when you speak, you are also
                              attuned.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              You enjoy talking to clients, understanding their
                              problems, and closing deals.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-heading">
                <span className="inner">SALES MANAGER</span>
              </h3>
              <div className="accordion-content clearfix">
                <div className="themesflat-row clearfix">
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 22px 0 0px"
                      data-mobilemargin="0 22px 0 0px"
                    >
                      <h6 className="name">About us</h6>
                      <p>
                        Dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown.
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <h6 className="name">
                        We also offer the follow benefits:
                      </h6>
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Bonus programme for the shift teams
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">Flexible working hours</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Employer contribution for pension scheme or VWL
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Jobticket (discount for public transport){" "}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={0}
                      data-mobile={0}
                      data-smobile={35}
                    />
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 12px 0 0px"
                      data-mobilemargin="0 0px 0 0px"
                    >
                      <h6 className="name">Requirements</h6>
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              1-4 years of experience in Sales or Management
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Tech-oriented. You don’t need to be a developer,
                              but have to be passionate about tech, web,
                              eCommerce, and all its applications.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Excellent communication and negotiation skills..
                              Clear and convincing when you speak, you are also
                              attuned.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              You enjoy talking to clients, understanding their
                              problems, and closing deals.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-heading">
                <span className="inner">TECHNICAL MANAGER</span>
              </h3>
              <div className="accordion-content clearfix">
                <div className="themesflat-row clearfix">
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 22px 0 0px"
                      data-mobilemargin="0 22px 0 0px"
                    >
                      <h6 className="name">About us</h6>
                      <p>
                        Dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown.
                      </p>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <h6 className="name">
                        We also offer the follow benefits:
                      </h6>
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Bonus programme for the shift teams
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">Flexible working hours</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Employer contribution for pension scheme or VWL
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Jobticket (discount for public transport){" "}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="span_1_of_6">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop={0}
                      data-mobile={0}
                      data-smobile={35}
                    />
                    <div
                      className="themesflat-content-box clearfix"
                      data-margin="0 12px 0 0px"
                      data-mobilemargin="0 0 0 0"
                    >
                      <h6 className="name">Requirements</h6>
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              1-4 years of experience in Sales or Management
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Tech-oriented. You don’t need to be a developer,
                              but have to be passionate about tech, web,
                              eCommerce, and all its applications.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              Excellent communication and negotiation skills..
                              Clear and convincing when you speak, you are also
                              attuned.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={10}
                        data-mobile={10}
                        data-smobile={10}
                      />
                      <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check" />
                            </span>
                            <span className="text">
                              You enjoy talking to clients, understanding their
                              problems, and closing deals.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={78}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
      </div>
    );
  }
}

export default SiteContent;
