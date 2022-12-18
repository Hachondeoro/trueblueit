import React, { Component } from "react";
import { Link } from "react-router-dom";
class Banner extends Component {
  render() {
    return (
      <div id="featured-title" className="featured-title clearfix">
        <div id="featured-title-inner" className="container clearfix">
          <div className="featured-title-inner-wrap">
            <div id="breadcrumbs">
              <div className="breadcrumbs-inner">
                <div className="breadcrumb-trail">
                  <Link to="home.html" className="trail-begin">
                    Home
                  </Link>
                  <span className="sep">|</span>
                  <Link to="page-about.html" className="trail-begin">
                    About us{" "}
                  </Link>
                  <span className="sep">|</span>
                  <span className="trail-end">About us detail</span>
                </div>
              </div>
            </div>
            <div className="featured-title-heading-wrap">
              <h1 className="feautured-title-heading">Who we are?</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
