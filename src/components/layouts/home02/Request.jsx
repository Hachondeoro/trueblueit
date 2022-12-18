import React, { Component } from "react";

class Request extends Component {
  render() {
    return (
      <div className="row-request parallax parallax-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div
                className="themesflat-spacer clearfix"
                data-desktop="82"
                data-mobile="60"
                data-smobile="60"
              ></div>
              <div className="themesflat-request-box style-1 clearfix">
                <div className="inner">
                  <div className="themesflat-headings style-1 clearfix">
                    <h2 className="heading text-white line-height-normal">
                      REQUEST CALL BACK
                    </h2>
                    <div className="sep has-width w80 accent-bg margin-top-13 clearfix"></div>
                    <p className="sub-heading margin-top-22 font-size-14 line-height-24 text-white font-weight-400">
                      Would you like to speak to one of our financial advisers
                      over the phone? Just submit your details and we’ll be in
                      touch shortly.
                    </p>
                  </div>
                  <div className="themesflat-contact-form style-1 clearfix">
                    <div
                      className="themesflat-spacer clearfix"
                      data-desktop="8"
                      data-mobile="8"
                      data-smobile="8"
                    ></div>
                    <form
                      action="#"
                      method="post"
                      className="contact-form wpcf7-form"
                    >
                      <span className="wpcf7-form-control-wrap your-name">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          defaultValue={""}
                          className="wpcf7-form-control"
                          placeholder="Name"
                          required
                        />
                      </span>
                      <span className="wpcf7-form-control-wrap your-phone">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          defaultValue={""}
                          className="wpcf7-form-control"
                          placeholder="Phone number"
                          required
                        />
                      </span>
                      <span className="wpcf7-form-control-wrap your-email">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          defaultValue={""}
                          className="wpcf7-form-control"
                          placeholder="Email"
                          required
                        />
                      </span>
                      <span className="wrap-submit">
                        <input
                          type="submit"
                          defaultValue="SEND US"
                          className="submit wpcf7-form-control wpcf7-submit"
                          id="submit"
                          name="submit"
                        />
                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop="76"
                data-mobile="60"
                data-smobile="60"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Request;
