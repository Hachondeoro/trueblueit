import React, { Component } from "react";

class FormContact02 extends Component {
  render() {
    return (
      <div className="row-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="themesflat-contact-form style-2 w100 clearfix">
                <form
                  action="#"
                  method="post"
                  className="contact-form wpcf7-form"
                >
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      tabIndex={1}
                      id="name"
                      name="name"
                      defaultValue={""}
                      className="wpcf7-form-control"
                      placeholder="Name*"
                      required
                    />
                  </span>
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="email"
                      tabIndex={3}
                      id="email"
                      name="email"
                      defaultValue={""}
                      className="wpcf7-form-control"
                      placeholder="Your Email*"
                      required
                    />
                  </span>
                  <span className="wpcf7-form-control-wrap your-phone">
                    <input
                      type="text"
                      tabIndex={2}
                      id="phone"
                      name="phone"
                      defaultValue={""}
                      className="wpcf7-form-control"
                      placeholder="Phone"
                    />
                  </span>
                  <span className="wpcf7-form-control-wrap your-message">
                    <textarea
                      name="message"
                      tabIndex={5}
                      cols={40}
                      rows={10}
                      className="wpcf7-form-control wpcf7-textarea"
                      placeholder="Message*"
                      required
                      defaultValue={""}
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
            <div className="col-md-8">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={35}
              />
              <div className="themesflat-map style-2" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
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

export default FormContact02;
