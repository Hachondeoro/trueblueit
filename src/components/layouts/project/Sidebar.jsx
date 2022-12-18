import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div className="detail-info">
        <div className="content-info">
          <div className="themesflat-headings style-2 clearfix">
            <h2 className="heading line-height-62">PROJECT NAME</h2>
            <div className="sep has-width w80 accent-bg clearfix"></div>
          </div>
          <ul className="list-info has-icon icon-left">
            <li>
              <span className="text">
                Client{" "}
                <span className="icon">
                  <i className="fa fa-user" />
                </span>
              </span>
              <span className="right">KenVin, LuHam</span>
            </li>
            <li>
              <span className="text">
                Budget{" "}
                <span className="icon">
                  <i className="fa fa-usd" />
                </span>
              </span>
              <span className="right">$46 Million</span>
            </li>
            <li>
              <span className="text">
                Surface Area{" "}
                <span className="icon">
                  <i className="fa fa-search" />
                </span>
              </span>
              <span className="right">145,000 sq. ft </span>
            </li>
            <li>
              <span className="text">
                Year completed{" "}
                <span className="icon">
                  <i className="fa fa-calendar" />
                </span>
              </span>
              <span className="right">2017</span>
            </li>
            <li>
              <span className="text">
                Prime Consultant:{" "}
                <span className="icon">
                  <i className="fa fa-folder-open" />
                </span>
              </span>
              <span className="right">Dialog Ontario</span>
            </li>
            <li>
              <span className="text">
                Tag{" "}
                <span className="icon">
                  <i className="fa fa-tag" />
                </span>
              </span>
              <span className="right">
                <Link to="#">Building</Link> / <Link to="#">Green house</Link>
              </span>
            </li>
          </ul>
        </div>
        {/* /.content-info */}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={46}
          data-mobile={35}
          data-smobile={35}
        />
        <div className="content-info info-brochures">
          <div className="themesflat-headings style-2 clearfix">
            <h2 className="heading line-height-62">BROCHURES</h2>
            <div className="sep has-width w60 accent-bg clearfix"></div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={34}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="button-wrap has-icon icon-left size-14 pf21">
            <Link
              to="#"
              className="themesflat-button font-default bg-light-white w100"
            >
              <span>
                Brochures.PDF{" "}
                <span className="icon">
                  <i className="fa fa-file-pdf-o" />
                </span>
              </span>
            </Link>
          </div>
          <div className="button-wrap has-icon icon-left size-14 pf21">
            <Link
              to="#"
              className="themesflat-button font-default bg-light-white w100"
            >
              <span>
                Brochures.DOC{" "}
                <span className="icon">
                  <i className="fa fa-file-word-o" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
