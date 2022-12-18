import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeaderTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lead: [
        {
          id: 1,
          srcimg: "assets/img/team/member-1-370x359.jpg",
          name: "Aaron Stanley",
          position: "Project Manager",
        },
        {
          id: 2,
          srcimg: "assets/img/team/member-2-370x359.jpg",
          name: "David Gunsul",
          position: "President",
        },
        {
          id: 3,
          srcimg: "assets/img/team/member-3-370x359.jpg",
          name: "Richard Johnson",
          position: "Safety Director",
        },
        {
          id: 4,
          srcimg: "assets/img/team/member-1-370x359.jpg",
          name: "Aaron Stanley",
          position: "Project Manager",
        },
        {
          id: 5,
          srcimg: "assets/img/team/member-2-370x359.jpg",
          name: "David Gunsul",
          position: "President",
        },
        {
          id: 6,
          srcimg: "assets/img/team/member-3-370x359.jpg",
          name: "Richard Johnson",
          position: "Safety Director",
        },
        {
          id: 7,
          srcimg: "assets/img/team/member-1-370x359.jpg",
          name: "Aaron Stanley",
          position: "Project Manager",
        },
        {
          id: 8,
          srcimg: "assets/img/team/member-2-370x359.jpg",
          name: "David Gunsul",
          position: "President",
        },
        {
          id: 9,
          srcimg: "assets/img/team/member-3-370x359.jpg",
          name: "Richard Johnson",
          position: "Safety Director",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row-team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={61}
                data-mobile={60}
                data-smobile={60}
              />
              <div className="themesflat-headings style-1 text-center clearfix">
                <h2 className="heading">LEADERSHIP TEAM</h2>
                <div className="sep has-icon width-125 clearfix">
                  <div className="sep-icon">
                    <span className="sep-icon-before sep-center sep-solid" />
                    <span className="icon-wrap">
                      <i className="autora-icon-build" />
                    </span>
                    <span className="sep-icon-after sep-center sep-solid" />
                  </div>
                </div>
                <p className="sub-heading font-weight-400 text-808 max-width-680">
                  With us you will have the peace of mind knowing that your
                  dream home project is in the hands of a licensed fully insured
                  building company.
                </p>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={39}
                data-mobile={35}
                data-smobile={35}
              />
              <div
                className="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix"
                data-gap={30}
                data-column={3}
                data-column2={2}
                data-column3={1}
                data-auto="true"
              >
                <div className="owl-carousel owl-theme">
                  {this.state.lead.map((data) => (
                    <div
                      className="themesflat-team style-1 align-center clearfix"
                      key={data.id}
                    >
                      <div className="team-item">
                        <div className="inner">
                          <div className="thumb data-effect-item">
                            <img src={data.srcimg} alt="imagealt" />
                            <ul className="socials clearfix">
                              <li className="facebook">
                                <Link to="#">
                                  <i className="autora-icon-facebook" />
                                </Link>
                              </li>
                              <li className="twitter">
                                <Link to="#">
                                  <i className="autora-icon-twitter" />
                                </Link>
                              </li>
                              <li className="camera">
                                <Link to="#">
                                  <i className="autora-icon-camera-outline" />
                                </Link>
                              </li>
                            </ul>
                            <div className="overlay-effect bg-color-4" />
                          </div>
                          <div className="text-wrap">
                            <h6 className="name">{data.name}</h6>
                            <div className="position">{data.position}</div>
                          </div>
                        </div>
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
        </div>
      </div>
    );
  }
}

export default LeaderTeam;
