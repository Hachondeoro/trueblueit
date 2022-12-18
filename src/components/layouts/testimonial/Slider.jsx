import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidetop: [
        {
          id: 1,
          srcimg: "assets/img/testimonials/customer-1-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "RON TOMLINSON",
          position: "CEO ThemesFlat",
        },
        {
          id: 2,
          srcimg: "assets/img/testimonials/customer-2-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "KEVIN CINQ-MARS",
          position: "President",
        },
        {
          id: 3,
          srcimg: "assets/img/testimonials/customer-3-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "ADAM HENDRIKS",
          position: "General Manager",
        },
        {
          id: 4,
          srcimg: "assets/img/testimonials/customer-4-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "CHRISTOPHER FLANN",
          position: "Maketing Manager",
        },
        {
          id: 5,
          srcimg: "assets/img/testimonials/customer-5-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "MICHAEL CLEMENT",
          position: "Design Manager",
        },
        {
          id: 6,
          srcimg: "assets/img/testimonials/customer-6-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "DANA LEWIS",
          position: "Manager, Human Resources",
        },
      ],
      slidebottom: [
        {
          id: 1,
          srcimg: "assets/img/testimonials/customer-4-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "CHRISTOPHER FLANN",
          position: "Maketing Manager",
        },
        {
          id: 2,
          srcimg: "assets/img/testimonials/customer-5-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "MICHAEL CLEMENT",
          position: "Design Manager",
        },
        {
          id: 3,
          srcimg: "assets/img/testimonials/customer-6-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "DANA LEWIS",
          position: "Manager, Human Resources",
        },
        {
          id: 4,
          srcimg: "assets/img/testimonials/customer-1-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "RON TOMLINSON",
          position: "CEO ThemesFlat",
        },
        {
          id: 5,
          srcimg: "assets/img/testimonials/customer-2-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "KEVIN CINQ-MARS",
          position: "President",
        },
        {
          id: 6,
          srcimg: "assets/img/testimonials/customer-3-100x100.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          names: "ADAM HENDRIKS",
          position: "General Manager",
        },
      ],
    };
  }

  render() {
    return (
      <div className="col-md-12">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={60}
          data-smobile={60}
        />
        <div
          className="themesflat-carousel-box clearfix"
          data-gap={30}
          data-column={3}
          data-column2={2}
          data-column3={1}
          data-auto="true"
        >
          <div className="owl-carousel owl-theme">
            {this.state.slidetop.map((data) => (
              <div
                className="themesflat-testimonials style-3 align-center has-width w35 circle clearfix"
                key={data.id}
              >
                <div className="testimonial-item">
                  <div className="inner">
                    <div className="thumb">
                      <img src={data.srcimg} alt="altimage" />
                      <span className="icon-wrap">
                        <i className="fa fa-quote-left" />
                      </span>
                    </div>
                    <blockquote className="text">
                      <p>{data.text}</p>
                      <div className="name-pos clearfix">
                        <h6 className="name">{data.names}</h6>
                        <span className="position">{data.position}</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={30}
          data-mobile={35}
          data-smobile={35}
        />
        <div
          className="themesflat-carousel-box clearfix"
          data-gap={30}
          data-column={3}
          data-column2={2}
          data-column3={1}
          data-auto="true"
        >
          <div className="owl-carousel owl-theme">
            {this.state.slidebottom.map((data) => (
              <div
                className="themesflat-testimonials style-3 align-center has-width w35 circle clearfix"
                key={data.id}
              >
                <div className="testimonial-item">
                  <div className="inner">
                    <div className="thumb">
                      <img src={data.srcimg} alt="altimage" />
                      <span className="icon-wrap">
                        <i className="fa fa-quote-left" />
                      </span>
                    </div>
                    <blockquote className="text">
                      <p>{data.text}</p>
                      <div className="name-pos clearfix">
                        <h6 className="name">{data.names}</h6>
                        <span className="position">{data.position}</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    );
  }
}

export default Slider;
