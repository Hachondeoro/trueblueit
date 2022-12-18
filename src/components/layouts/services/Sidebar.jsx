import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={0}
          data-smobile={0}
        />
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_list">
            <div className="inner">
              <ul className="list-wrap">
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Design - Build</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Construction manager</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Metal building services</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">preconstruction services</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">building envelopes</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Concrete structures</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget widget_help align-center has-shadow no-sep has-border border-solid">
            <div className="inner">
              <h2 className="widget-title margin-bottom-14">
                <span>HOW CAN WE HELP ?</span>
              </h2>
              <p className="text line-height-26 margin-bottom-23">
                Are you interested in finding out how we can make your project.
                Please email us.
              </p>
              <div className="elm-button">
                <Link to="#" className="themesflat-button bg-accent pd30">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    );
  }
}

export default Sidebar;
