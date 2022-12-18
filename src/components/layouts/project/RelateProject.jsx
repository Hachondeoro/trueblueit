import React, { Component } from "react";
import { Link } from "react-router-dom";
class RelateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          srcimg: "assets/img/project/project-1-370x245.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 2,
          srcimg: "assets/img/project/project-2-370x245.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 3,
          srcimg: "assets/img/project/project-3-370x245.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 4,
          srcimg: "assets/img/project/project-1-370x245.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 5,
          srcimg: "assets/img/project/project-2-370x245.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 6,
          srcimg: "assets/img/project/project-3-370x245.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          meta: "Architecture",
          text: "Building",
        },
      ],
    };
  }
  render() {
    return (
      <div
        className="themesflat-carousel-box data-effect has-arrows arrow-top arrow75 arrow-circle arrow-style-2 clearfix"
        data-gap={30}
        data-column={3}
        data-column2={2}
        data-column3={1}
        data-auto="false"
      >
        <div className="owl-carousel owl-theme">
          {this.state.data.map((data) => (
            <div className="themesflat-project style-1 clearfix" key={data.id}>
              <div className="project-item">
                <div className="inner">
                  <div className="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46">
                    <img src={data.srcimg} alt="altimage" />
                    <div className="text-wrap text-center">
                      <h5 className="heading">
                        <Link to="#">{data.heading}</Link>
                      </h5>
                      <div className="elm-meta">
                        <span>
                          <Link to="#">{data.meta}</Link>
                        </span>
                        <span>
                          <Link to="#">{data.text}</Link>
                        </span>
                      </div>
                    </div>
                    <div className="elm-link">
                      <Link to="#" className="icon-1 icon-search"></Link>
                      <Link to="#" className="icon-1"></Link>
                    </div>
                    <div className="overlay-effect bg-color-3" />
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

export default RelateProject;
