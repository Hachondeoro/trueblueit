import React, { Component } from 'react';

class Information extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={0}
          data-smobile={35}
        />
        <div className="themesflat-headings style-2 clearfix">
          <h2 className="heading">INFOMATION</h2>
          <div className="sep has-width w80 accent-bg clearfix" />
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={36}
          data-mobile={35}
          data-smobile={35}
        />
        <div className="themesflat-tabs style-1 w168 clearfix">
          <div className="tab-content-wrap clearfix">
            <div className="tab-content">
              <div className="item-content">
                <ul>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-map-marker" />
                      <span className="text">
                        OFFICE: Charles Darwin Centre, Level 16/19 Smith St, Darwin City NT 0800
                      </span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-phone" />
                      <span className="text">PHONE: (08) 8963 5600</span>
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="inner">
                      <span className="fa fa-envelope" />
                      <span className="text">EMAIL : info@trueblueit.com.au</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={20}
          data-mobile={35}
          data-smobile={35}
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.773550403753!2d130.8404830128014!3d-12.464795987755064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc09105e5b924db%3A0x17f2917045756ea2!2sCDC%20Building!5e0!3m2!1sen!2sau!4v1672837146053!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default Information;
