import React, { Component } from "react";

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partner: [
        {
          id: 1,
          img: "assets/img/partners/partner-1.png",
          imgcolor: "assets/img/partners/partner-1-color.png",
        },
        {
          id: 2,
          img: "assets/img/partners/partner-2.png",
          imgcolor: "assets/img/partners/partner-2-color.png",
        },
        {
          id: 3,
          img: "assets/img/partners/partner-3.png",
          imgcolor: "assets/img/partners/partner-3-color.png",
        },
        {
          id: 4,
          img: "assets/img/partners/partner-4.png",
          imgcolor: "assets/img/partners/partner-4-color.png",
        },
        {
          id: 5,
          img: "assets/img/partners/partner-5.png",
          imgcolor: "assets/img/partners/partner-5-color.png",
        },
        {
          id: 6,
          img: "assets/img/partners/partner-1.png",
          imgcolor: "assets/img/partners/partner-1-color.png",
        },
        {
          id: 7,
          img: "assets/img/partners/partner-2.png",
          imgcolor: "assets/img/partners/partner-2-color.png",
        },
        {
          id: 8,
          img: "assets/img/partners/partner-3.png",
          imgcolor: "assets/img/partners/partner-3-color.png",
        },
        {
          id: 9,
          img: "assets/img/partners/partner-4.png",
          imgcolor: "assets/img/partners/partner-4-color.png",
        },
        {
          id: 10,
          img: "assets/img/partners/partner-5.png",
          imgcolor: "assets/img/partners/partner-5-color.png",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row-partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={83}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-carousel-box clearfix"
                data-gap={5}
                data-column={5}
                data-column2={3}
                data-column3={2}
                data-auto="true"
              >
                <div className="owl-carousel owl-theme">
                  {this.state.partner.map((data) => (
                    <div
                      className="themesflat-partner style-2 align-center clearfix"
                      key={data.id}
                    >
                      <div className="partner-item">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={data.img}
                              alt="altimage"
                              className="partner-default"
                            />
                            <img
                              src={data.imgcolor}
                              alt="altimage"
                              className="partner-color"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={66}
                data-mobile={60}
                data-smobile={60}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
