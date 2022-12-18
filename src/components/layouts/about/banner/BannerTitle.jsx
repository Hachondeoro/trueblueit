import React, { Component } from "react";
import { Link } from "react-router-dom";
class BannerTitle extends Component {
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
                  <span className="sep">{this.props.data.border}</span>
                  <Link
                    to={this.props.data.links}
                    onClick={() => {
                      window.location.href = this.props.data.links;
                    }}
                    className="trail-begin"
                  >
                    {this.props.data.titlelink}
                  </Link>
                  <span className="sep">|</span>
                  <span className="trail-end">{this.props.data.name}</span>
                </div>
              </div>
            </div>
            <div className="featured-title-heading-wrap">
              <h1 className="feautured-title-heading">
                {this.props.data.heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerTitle;
