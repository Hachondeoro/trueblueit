import React, { Component } from "react";

class Progress extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-content-box clearfix"
          data-margin="0 31px 0 0"
          data-mobilemargin="0 0 0 0"
        >
          <p className="font-size-16 no-margin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-progress style-1 height-10px clearfix">
            <h3 className="title">PARTNERSHIP</h3>
            <div className="perc-wrap">
              <div className="perc">
                <span>80%</span>
              </div>
            </div>
            <div
              className="progress-bg"
              data-percent={80}
              data-inviewport="yes"
            >
              <div className="progress-animate" />
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={25}
            data-mobile={25}
            data-smobile={25}
          />
          <div className="themesflat-progress style-1 height-10px clearfix">
            <h3 className="title">FULL SUPPORT</h3>
            <div className="perc-wrap">
              <div className="perc">
                <span>90%</span>
              </div>
            </div>
            <div
              className="progress-bg"
              data-percent={90}
              data-inviewport="yes"
            >
              <div className="progress-animate" />
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={26}
            data-mobile={26}
            data-smobile={26}
          />
          <div className="themesflat-progress style-1 height-10px clearfix">
            <h3 className="title">OPPORTUNITY</h3>
            <div className="perc-wrap">
              <div className="perc">
                <span>70%</span>
              </div>
            </div>
            <div
              className="progress-bg"
              data-percent={70}
              data-inviewport="yes"
            >
              <div className="progress-animate" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
