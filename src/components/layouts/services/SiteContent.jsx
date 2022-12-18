import React, { Component } from "react";
import { Link } from "react-router-dom";
class SiteContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          text01:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          text02:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        },
        {
          id: 2,
          text01:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          text02:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        },
        {
          id: 3,
          text01:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          text02:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        },
      ],
    };
  }

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
          <div className="themesflat-row equalize sm-equalize-auto clearfix">
            <div className="span_1_of_6 bg-f7f">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={60}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-content-box clearfix"
                data-margin="0 10px 0 43px"
                data-mobilemargin="0 15px 0 15px"
              >
                <div className="themesflat-headings style-2 clearfix">
                  <div className="sup-heading">SPECIAL SERVICES</div>
                  <h2 className="heading font-size-28 line-height-39">
                    DESIGN &amp; BUILD
                  </h2>
                  <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                  <p className="sub-heading margin-top-33 line-height-24">
                    We work to develop and understand project expectations and
                    then manage those needs with a customized, qualified design
                    team. Innovation should happen throughout a project
                  </p>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={56}
                data-mobile={56}
                data-smobile={56}
              />
            </div>
            <div className="span_1_of_6 half-background style-2"></div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={39}
            data-mobile={39}
            data-smobile={39}
          />
          <div className="flat-content-wrap style-2 clearfix">
            <h5 className="title">SERVICE CONSULTANT</h5>
            <p>
              Through our Design-Build service, we provides a single source of
              responsibility to the client. We work to develop and understand
              project expectations and then manage those needs with a
              customized, qualified design team. Innovation should happen
              throughout a project. To do that, we focus our efforts on each
              step of every phase to make the entire process smooth and
              straightforward. Our proactive, collaborative approach is what
              uncovers unique ideas and opportunities for improvement before the
              next phase begins.
            </p>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="flat-content-wrap style-2 clearfix">
            <div className="item">
              <div className="inner">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={10}
                  data-mobile={10}
                  data-smobile={10}
                />
                <h5 className="title">OUR SERVICES INCLUDE:</h5>
                <p>
                  We have successfully completed projects in numerous states
                  across the continental United States. Autora Construction
                  Services has a proven track record of:
                </p>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={8}
                  data-mobile={8}
                  data-smobile={8}
                />
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">Interior Design Planning</span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        Colour &amp; Finish Consultations
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        Architectural &amp; Custom Lighting
                      </span>
                    </span>
                  </div>
                </div>
                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                  <div className="inner">
                    <span className="item">
                      <span className="icon">
                        <i className="fa fa-check-circle" />
                      </span>
                      <span className="text">
                        Glass &amp; Acrylic Specifications
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={35}
              />
              <div
                className="themesflat-content-box clearfix"
                data-margin="0 0 0 11px"
                data-mobilemargin="0 0 0 0"
              >
                <div className="inner pd35 bg-ffc">
                  <h5 className="title text-white line-height-24 padding-left-7">
                    THIS AWESOME SERVICE BRINGS FULL INTEREST INFORMATION FOR
                    YOUR PURPOSE
                  </h5>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={16}
                    data-mobile={16}
                    data-smobile={16}
                  />
                  <div className="button-wrap has-icon icon-right size-14">
                    <Link
                      to="#"
                      className="themesflat-button bg-white color-333 w100 font-weight-400 no-letter-spacing pd26"
                    >
                      <span>
                        Download .PDF{" "}
                        <span className="icon">
                          <i className="fa fa-file-pdf-o" />
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={6}
                    data-mobile={6}
                    data-smobile={6}
                  />
                  <div className="button-wrap has-icon icon-right size-14">
                    <Link
                      to="#"
                      className="themesflat-button bg-white color-333 w100 font-weight-400 no-letter-spacing pd26 "
                    >
                      <span>
                        Download .DOC{" "}
                        <span className="icon">
                          <i className="fa fa-file-word-o" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="flat-content-wrap style-2 clearfix">
            <h5 className="title no-letter-spacing">
              CONTACT US FOR DESIGN-BUILD SERVICES TODAY
            </h5>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={27}
              data-mobile={27}
              data-smobile={27}
            />
            <div className="themesflat-tabs style-2 title-w170 clearfix">
              <ul className="tab-title clearfix ">
                <li className="item-title active">
                  <span className="inner">Our focus</span>
                </li>
                <li className="item-title">
                  <span className="inner">Dedicated</span>
                </li>
                <li className="item-title">
                  <span className="inner">Committed</span>
                </li>
              </ul>
              <div className="tab-content-wrap clearfix">
                {this.state.tabs.map((data) => (
                  <div className="tab-content" key={data.id}>
                    <div className="item-content">
                      <p>{data.text01}</p>
                      <p>{data.text02}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
      </div>
    );
  }
}

export default SiteContent;
