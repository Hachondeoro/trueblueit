import React, { Component } from "react";
import { Link } from "react-router-dom";
class TabProjectFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          classnames: "project-item green villa",
          srcimg: "assets/img/project/project-1-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
        {
          id: 2,
          classnames: "project-item green architecture building",
          srcimg: "assets/img/project/project-2-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
        {
          id: 3,
          classnames: "project-item architecture building construction",
          srcimg: "assets/img/project/project-3-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
        {
          id: 4,
          classnames: "project-item villa construction",
          srcimg: "assets/img/project/project-4-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
        {
          id: 5,
          classnames: "project-item green villa",
          srcimg: "assets/img/project/project-5-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
        {
          id: 6,
          classnames: "project-item green architecture building",
          srcimg: "assets/img/project/project-6-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
        {
          id: 7,
          classnames: "project-item architecture building construction",
          srcimg: "assets/img/project/project-7-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
        {
          id: 8,
          classnames: "project-item villa construction",
          srcimg: "assets/img/project/project-8-440x280.jpg",
          heading: "LAKE MEADOWS APARTMENTS",
          name01: "Architecture",
          name02: "Building",
        },
      ],
    };
  }
  render() {
    return (
      <div className="themesflat-project style-1 isotope-project has-margin mg15 w25 data-effect clearfix">
        {this.state.projects.map((data) => (
          <div className={data.classnames} key={data.id}>
            <div className="inner">
              <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
                <img src={data.srcimg} alt="altimage" />
                <div className="elm-link">
                  <Link to="#" className="icon-1 icon-search" />
                  <Link to="#" className="icon-1" />
                </div>
                <div className="overlay-effect bg-color-3" />
              </div>
              <div className="text-wrap">
                <h5 className="heading">
                  <Link to="#">{data.heading}</Link>
                </h5>
                <div className="elm-meta">
                  <span>
                    <Link to="#">{data.name01}</Link>
                  </span>
                  <span>
                    <Link to="#">{data.name01}</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TabProjectFull;
