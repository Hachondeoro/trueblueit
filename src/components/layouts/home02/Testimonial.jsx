import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <div className="row-testimonials bg-light-snow">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={60}
                data-mobile={60}
                data-smobile={60}
              />
              <div className="themesflat-headings style-1 font-hind text-center clearfix">
                <h2 className="heading">TESTIMONIAL</h2>
                <div className="sep has-icon width-125 clearfix">
                  <div className="sep-icon">
                    <span className="sep-icon-before sep-center sep-solid" />
                    <span className="icon-wrap">
                      <i className="autora-icon-build" />
                    </span>
                    <span className="sep-icon-after sep-center sep-solid" />
                  </div>
                </div>
                <p className="sub-heading">
                  With us you will have the peace of mind knowing that your
                  dream home project is in the hands <br /> of a licensed fully
                  insured building company.
                </p>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={46}
                data-mobile={35}
                data-smobile={35}
              />
              <div
                className="themesflat-carousel-box has-bullets bullet-circle clearfix"
                data-gap={30}
                data-column={3}
                data-column2={2}
                data-column3={1}
                data-auto="true"
              >
                <div className="owl-carousel owl-theme">
                  <div className="themesflat-testimonials style-2 align-center clearfix">
                    <div className="testimonial-item">
                      <div className="inner">
                        <div className="thumb">
                          <img
                            src="assets/img/testimonials/customer-1-90x90.jpg"
                            alt="altimage"
                          />
                        </div>
                        <blockquote className="text">
                          <div className="name-pos clearfix">
                            <h6 className="name">JERRY SKINNER</h6>
                            <span className="position">CAM Gentle Co.</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincid unt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation{" "}
                          </p>
                          <div className="list-star">
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-testimonials style-2 align-center clearfix">
                    <div className="testimonial-item">
                      <div className="inner">
                        <div className="thumb">
                          <img
                            src="assets/img/testimonials/customer-2-90x90.jpg"
                            alt="altimage"
                          />
                        </div>
                        <blockquote className="text">
                          <div className="name-pos clearfix">
                            <h6 className="name">ASHLEY SOLOMON</h6>
                            <span className="position">CAM Gentle Co.</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincid unt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation{" "}
                          </p>
                          <div className="list-star">
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-testimonials style-2 align-center clearfix">
                    <div className="testimonial-item">
                      <div className="inner">
                        <div className="thumb">
                          <img
                            src="assets/img/testimonials/customer-3-90x90.jpg"
                            alt="altimage"
                          />
                        </div>
                        <blockquote className="text">
                          <div className="name-pos clearfix">
                            <h6 className="name">WILLIAM KRAUSE</h6>
                            <span className="position">CAM Gentle Co.</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincid unt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation{" "}
                          </p>
                          <div className="list-star">
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-testimonials style-2 align-center clearfix">
                    <div className="testimonial-item">
                      <div className="inner">
                        <div className="thumb">
                          <img
                            src="assets/img/testimonials/customer-4-90x90.jpg"
                            alt="altimage"
                          />
                        </div>
                        <blockquote className="text">
                          <div className="name-pos clearfix">
                            <h6 className="name">JERRY SKINNER</h6>
                            <span className="position">CAM Gentle Co.</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincid unt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation{" "}
                          </p>
                          <div className="list-star">
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                            <i className="ion-star" />
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  {/* /.themesflat-testimonials */}
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={81}
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

export default Testimonial;
