import React, { Component } from "react";
import { Link } from "react-router-dom";

class SiteContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconbox: [
        {
          id: 1,
          icon: "autora-icon-quality",
          title: "BEST QUALITY",
          text: "Autora Construction Services are committed to meeting the highest quality standards without compromising our safety culture.",
        },
        {
          id: 2,
          icon: "autora-icon-time",
          title: "ON TIME",
          text: "Autora Construction Services are committed to meeting the highest quality standards without compromising our safety culture.",
        },
        {
          id: 3,
          icon: "autora-icon-author",
          title: "EXPERIENCED",
          text: "Autora Construction Services are committed to meeting the highest quality standards without compromising our safety culture.",
        },
      ],
      history: [
        {
          id: 1,
          content: [
            {
              id: 1,
              year: "2000",
              text: "Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo Text seit 1500",
              classnames: "flat-content-wrap",
            },
            {
              id: 2,
              year: "2010",
              text: "Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo Text seit 1500",
              classnames: "flat-content-wrap",
            },
          ],
        },
        {
          id: 2,
          content: [
            {
              id: 3,
              year: "2005",
              text: "Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo Text seit 1500",
              classnames: "flat-content-wrap pd26",
            },
            {
              id: 4,
              year: "2018",
              text: "Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo Text seit 1500",
              classnames: "flat-content-wrap pd26",
            },
          ],
        },
      ],
      accordions: [
        {
          id: 1,
          classnames: "accordion-item active",
          title: "our mission",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: 2,
          classnames: "accordion-item",
          title: "our vision",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: 3,
          classnames: "accordion-item",
          title: "our technology",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
            data-desktop={61}
            data-mobile={60}
            data-smobile={60}
          />
          <div className="themesflat-headings style-2 clearfix">
            <h2 className="heading">OUR COMPANIES</h2>
            <div className="sep has-width w80 accent-bg clearfix" />
            <p className="sub-heading line-height-24 text-777 margin-top-28 margin-right-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={28}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-row gutter-15 clearfix">
            {this.state.iconbox.map((data) => (
              <div className="col span_1_of_4" key={data.id}>
                <div
                  className="themesflat-content-box clearfix"
                  data-margin="0 0px 0 0px"
                  data-mobilemargin="0 0 0 0"
                >
                  <div className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color border-light padding-inner pd33 style-1 clearfix">
                    <div className="icon-wrap">
                      <i className={data.icon} />
                    </div>
                    <div className="text-wrap">
                      <h5 className="heading">
                        <Link to="#">{data.title}</Link>
                      </h5>
                      <div className="sep clearfix" />
                      <p className="sub-heading">{data.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={45}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-headings style-2 clearfix">
            <h2 className="heading">OUR HISTORY</h2>
            <div className="sep has-width w80 accent-bg clearfix" />
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={24}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-row separator drank clearfix">
            {this.state.history.map((data) => (
              <div className="span_1_of_6 separator-solid" key={data.id}>
                {data.content.map((contents) => (
                  <div className={contents.classnames} key={contents.id}>
                    <div className="title">{contents.year}</div>
                    <p>{contents.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={38}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-headings style-2 clearfix">
            <h2 className="heading">OUR CORE VALUES</h2>
            <div className="sep has-width w80 accent-bg clearfix" />
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={35}
            data-mobile={35}
            data-smobile={35}
          />
          <div
            className="themesflat-content-box"
            data-margin="0 0 0 0"
            data-mobilemargin="0 0 0 0"
          >
            <div className="themesflat-accordions style-3 has-icon icon-left iconstyle-2 our-background clearfix">
              {this.state.accordions.map((data) => (
                <div className={data.classnames} key={data.id}>
                  <h3 className="accordion-heading">
                    <span className="inner">{data.title}</span>
                  </h3>
                  <div className="accordion-content">
                    <div>{data.text}</div>
                  </div>
                </div>
              ))}
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
