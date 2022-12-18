import React, { Component } from "react";
import { Link } from "react-router-dom";

class SliderService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [
        {
          id: 1,
          srcimg: "assets/img/imagebox/image-box-1-370x215.jpg",
          heading: "DESIGN-BUILD",
          text: "We develop and understand project expectations and then manage those needs with a design team...",
        },
        {
          id: 2,
          srcimg: "assets/img/imagebox/image-box-2-370x215.jpg",
          heading: "CONSTRUCTION MANAGEMENT",
          text: "We work closely with architects to understand the project, and ultimately develop a targeted...",
        },
        {
          id: 3,
          srcimg: "assets/img/imagebox/image-box-3-370x215.jpg",
          heading: "METAL BUILDING SERVICES",
          text: "In the past decade alone, we have completed more than 5 million square feet of metal building...",
        },
        {
          id: 4,
          srcimg: "assets/img/imagebox/image-box-1-370x215.jpg",
          heading: "DESIGN-BUILD",
          text: "We develop and understand project expectations and then manage those needs with a design team...",
        },
        {
          id: 5,
          srcimg: "assets/img/imagebox/image-box-2-370x215.jpg",
          heading: "CONSTRUCTION MANAGEMENT",
          text: "We work closely with architects to understand the project, and ultimately develop a targeted...",
        },
        {
          id: 6,
          srcimg: "assets/img/imagebox/image-box-3-370x215.jpg",
          heading: "METAL BUILDING SERVICES",
          text: "In the past decade alone, we have completed more than 5 million square feet of metal building...",
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="themesflat-carousel-box has-arrows arrow-center offset-v-111 offset-h-21 arrow-circle arrow-style-2 data-effect clearfix"
        data-gap={30}
        data-column={3}
        data-column2={2}
        data-column3={1}
        data-auto="true"
      >
        <div className="owl-carousel owl-theme">
          {this.state.slider.map((data) => (
            <div
              className="themesflat-image-box style-2 clearfix"
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
                    <p>{data.text}</p>
                    <div className="elm-readmore">
                      <Link to="#">DETAILS</Link>
                    </div>
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

export default SliderService;
