import React, { Component } from "react";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: [
        {
          id: 1,
          classname: "accordion-item active",
          heading: "Are there any hosting companies you recommend?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        {
          id: 2,
          classname: "accordion-item",
          heading: "We use technology to do the job more quickly",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        {
          id: 3,
          classname: "accordion-item",
          heading: "Employees are continually trained on safety issues",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
      ],
    };
  }

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
          data-margin="0 0 0 18px"
          data-mobilemargin="0 0 0 0"
        >
          <div className="themesflat-headings style-1 clearfix">
            <h2 className="heading">FAQs</h2>
            <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={38}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-accordions style-1 has-icon icon-left iconstyle-1 clearfix">
            {this.state.accordion.map((data) => (
              <div className={data.classname} key={data.id}>
                <h3 className="accordion-heading">
                  <span className="inner">{data.heading}</span>
                </h3>
                <div className="accordion-content">
                  <div>{data.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
