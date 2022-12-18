import React, { Component } from "react";
import { Link } from "react-router-dom";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidecard: [
        {
          id: 1,
          srcimg: "assets/img/imagebox/image-box-1-370x250.jpg",
          heading: "DESIGN & BUILD",
        },
        {
          id: 2,
          srcimg: "assets/img/imagebox/image-box-2-370x250.jpg",
          heading: "BUILDING ENVELOPES",
        },
        {
          id: 3,
          srcimg: "assets/img/imagebox/image-box-3-370x250.jpg",
          heading: "CONSTRUCTION",
        },
        {
          id: 4,
          srcimg: "assets/img/imagebox/image-box-1-370x250.jpg",
          heading: "DESIGN & BUILD",
        },
        {
          id: 5,
          srcimg: "assets/img/imagebox/image-box-2-370x250.jpg",
          heading: "BUILDING ENVELOPES",
        },
        {
          id: 6,
          srcimg: "assets/img/imagebox/image-box-3-370x250.jpg",
          heading: "CONSTRUCTION MANAGEMENT",
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="themesflat-carousel-box data-effect clearfix"
        data-gap={30}
        data-column={3}
        data-column2={2}
        data-column3={1}
        data-auto="false"
      >
        <div className="owl-carousel owl-theme">
          {this.state.slidecard.map((data) => (
            <div
              className="themesflat-image-box style-1 has-icon icon-right w65 clearfix"
              key={data.id}
            >
              <div className="image-box-item">
                <div className="inner">
                  <div className="thumb data-effect-item">
                    <img src={data.srcimg} alt="altimage" />
                    <div className="overlay-effect bg-color-accent" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <Link to="#">{data.heading}</Link>
                    </h5>
                    <span className="icon-wrap">
                      <i className="fa fa-angle-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Service;
