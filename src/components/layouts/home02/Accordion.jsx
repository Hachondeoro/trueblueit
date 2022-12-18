import React, { Component } from "react";

class Accordion extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={0}
          data-smobile={35}
        />
        <div
          className="themesflat-content-box"
          data-margin="3px 0 0 10px"
          data-mobilemargin="0 0 0 0"
        >
          <div className="themesflat-accordions style-2 has-icon icon-left iconstyle-2 clearfix">
            <div className="accordion-item active">
              <h3 className="accordion-heading">
                <span className="inner">
                  Are there any hosting companies you... ?
                </span>
              </h3>
              <div className="accordion-content">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-heading">
                <span className="inner">
                  We use technology to do the job more... ?
                </span>
              </h3>
              <div className="accordion-content">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>
            </div>
            <div className="accordion-item ">
              <h3 className="accordion-heading">
                <span className="inner">
                  Employees are continually trained on safety... ?
                </span>
              </h3>
              <div className="accordion-content">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
