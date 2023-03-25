import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  render() {
    return (
      <div id="top-bar">
        <div id="top-bar-inner" className="container">
          <div className="top-bar-inner-wrap">
            <div className="top-bar-content">
              <div className="inner">
                <span className="address content">
                  CDC, Level 16/19 Smith St, Darwin City NT 0800
                </span>
                <span className="phone content">(08) 8963 5764</span>
                <span className="phone content">0422 611 304</span>
              </div>
            </div>
            <div className="top-bar-socials">
              <div className="inner">
                <span className="text">Follow us:</span>
                <span className="icons">
                  <a
                    href="https://www.facebook.com/trueblueits"
                    data-interception="off"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </span>
                <span className="icons">
                  <a
                    href="https://www.linkedin.com/company/true-blue-it-services/"
                    data-interception="off"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
