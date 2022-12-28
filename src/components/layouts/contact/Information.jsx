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
        <div className="themesflat-map" />
      </div>
    );
  }
}

export default Information;
