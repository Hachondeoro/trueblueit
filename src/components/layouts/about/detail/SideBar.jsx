import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={0}
          data-smobile={0}
        />
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_list">
            <div className="inner">
              <ul className="list-wrap">
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Who we are?</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Leadership Team</span>
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="#">
                    <span className="text">Careers</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget widget_instagram margin-top-51">
            <h2 className="widget-title margin-bottom-30">
              <span>OUR GALLERY</span>
            </h2>
            <div className="instagram-wrap data-effect clearfix col3 g10">
              <div className="instagram_badge_image has-effect-icon">
                <Link to="#" target="_blank" className="data-effect-item">
                  <span className="item">
                    <img
                      src="assets/img/instagram/instagram-1-83x83.jpg"
                      alt="altimage"
                    />
                  </span>
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <span className="icon-3" />
                  </div>
                </Link>
              </div>
              <div className="instagram_badge_image has-effect-icon">
                <Link to="#" target="_blank" className="data-effect-item">
                  <span className="item">
                    <img
                      src="assets/img/instagram/instagram-2-83x83.jpg"
                      alt="altimage"
                    />
                  </span>
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <span className="icon-3" />
                  </div>
                </Link>
              </div>
              <div className="instagram_badge_image has-effect-icon">
                <Link to="#" target="_blank" className="data-effect-item">
                  <span className="item">
                    <img
                      src="assets/img/instagram/instagram-3-83x83.jpg"
                      alt="altimage"
                    />
                  </span>
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <span className="icon-3" />
                  </div>
                </Link>
              </div>
              <div className="instagram_badge_image has-effect-icon">
                <Link to="#" target="_blank" className="data-effect-item">
                  <span className="item">
                    <img
                      src="assets/img/instagram/instagram-4-83x83.jpg"
                      alt="altimage"
                    />
                  </span>
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <span className="icon-3" />
                  </div>
                </Link>
              </div>
              <div className="instagram_badge_image has-effect-icon">
                <Link to="#" target="_blank" className="data-effect-item">
                  <span className="item">
                    <img
                      src="assets/img/instagram/instagram-5-83x83.jpg"
                      alt="altimage"
                    />
                  </span>
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <span className="icon-3" />
                  </div>
                </Link>
              </div>
              <div className="instagram_badge_image has-effect-icon">
                <Link to="#" target="_blank" className="data-effect-item">
                  <span className="item">
                    <img
                      src="assets/img/instagram/instagram-6-83x83.jpg"
                      alt="altimage"
                    />
                  </span>
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <span className="icon-3" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="widget widget_lastest_twitter margin-top-40">
            <h2 className="widget-title">
              <span>LATEST TWITTER</span>
            </h2>
            <ul className="lastest-posts clearfix">
              <li className="clearfix">
                <div className="icon-wrap has-width w30">
                  <i className="ion-social-twitter" />
                </div>
                <div className="text">
                  <p>
                    <Link to="#">Frank Espinoza</Link> Lorem Ipsum has been the
                    industry's standard dummy text ever since.
                  </p>
                </div>
              </li>
              <li className="clearfix">
                <div className="icon-wrap has-width w30">
                  <i className="ion-social-twitter" />
                </div>
                <div className="text">
                  <p>
                    <Link to="#">Frank Espinoza</Link> Lorem Ipsum has been the
                    industry's standard dummy text ever since.
                  </p>
                </div>
              </li>
              <li className="clearfix">
                <div className="icon-wrap has-width w30">
                  <i className="ion-social-twitter" />
                </div>
                <div className="text">
                  <p>
                    <Link to="#">Frank Espinoza</Link> Lorem Ipsum has been the
                    industry's standard dummy text ever since.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    );
  }
}

export default SideBar;
