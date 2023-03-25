import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="clearfix">
        <div id="footer-widgets" className="container">
          <div className="themesflat-row gutter-30">
            <div className="col span_1_of_3">
              <div className="widget widget_text">
                <div className="textwidget">
                  <p>
                    <img
                      src="/assets/img/trueblue-logo.png"
                      alt="imagealt"
                      width={220}
                      height={50}
                    />
                  </p>
                  <p className="margin-bottom-15">We are able to help you 24 hours a day.</p>
                  <ul>
                    <li>
                      <div className="inner">
                        <span className="fa fa-map-marker" />
                        <span className="text">
                          Charles Darwin Centre, Level 16/19 Smith St{'  '}
                          <span className="sl">Darwin City NT 0800</span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <span className="fa fa-phone" />
                        <span className="text">Mobile : (+61) 422 611 304</span>
                        <br></br>
                        <span className="text">Phone : (08) 8963 5764</span>
                      </div>
                    </li>
                    <li className="margin-top-7">
                      <div className="inner">
                        <span className=" font-size-14 fa fa-envelope" />
                        <span className="text">info@trueblueit.com.au</span>
                      </div>
                    </li>
                    <li className="margin-top-7">
                      <div className="inner">
                        <span className=" font-size-14 fa fa-briefcase" />
                        <span className="text">ABN: 95664282893</span>
                      </div>
                    </li>
                    <li>
                      <span className="icons">
                        <a
                          href="https://www.facebook.com/trueblueits"
                          data-interception="off"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook" style={{ color: '#0272CE' }} />
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="icons">
                        <a
                          href="https://www.linkedin.com/company/true-blue-it-services/"
                          data-interception="off"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-linkedin" style={{ color: '#0272CE' }} />
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.widget_text */}
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={35}
              />
            </div>
            {/* /.col */}
            <div className="col span_1_of_3">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={0}
              />
              {/*<div className="widget widget_lastest">*/}
              {/*  <h2 className="widget-title">*/}
              {/*    <span>RECENT POSTS</span>*/}
              {/*  </h2>*/}
              {/*  <ul className="lastest-posts data-effect clearfix">*/}
              {/*    <li className="clearfix">*/}
              {/*      <div className="thumb data-effect-item has-effect-icon">*/}
              {/*        <img src="assets/img/news/post-1-65x65.jpg" alt="imagealt" />*/}
              {/*        <div className="overlay-effect bg-color-2" />*/}
              {/*        <div className="elm-link">*/}
              {/*          <Link to="page-blog-single.html" className="icon-2" />*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="text">*/}
              {/*        <h3>*/}
              {/*          <Link to="page-blog-single.html">*/}
              {/*            SMART BUILDING WITH CONCRETE SUSTAINABLE*/}
              {/*          </Link>*/}
              {/*        </h3>*/}
              {/*        <span className="post-date">*/}
              {/*          <span className="entry-date">29 June 2018</span>*/}
              {/*        </span>*/}
              {/*      </div>*/}
              {/*    </li>*/}
              {/*    <li className="clearfix">*/}
              {/*      <div className="thumb data-effect-item has-effect-icon">*/}
              {/*        <img src="assets/img/news/post-2-65x65.jpg" alt="imagealt" />*/}
              {/*        <div className="overlay-effect bg-color-2" />*/}
              {/*        <div className="elm-link">*/}
              {/*          <Link to="page-blog-single.html" className="icon-2" />*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="text">*/}
              {/*        <h3>*/}
              {/*          <Link to="page-blog-single.html">*/}
              {/*            HI-TECH WOODEN HOUSE BUILT WITHOUT GLUE*/}
              {/*          </Link>*/}
              {/*        </h3>*/}
              {/*        <span className="post-date">*/}
              {/*          <span className="entry-date">31 June 2018</span>*/}
              {/*        </span>*/}
              {/*      </div>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
              {/* /.widget_lastest */}
            </div>
            {/* /.col */}
            {/*<div className="col span_1_of_3">*/}
            {/*  <div*/}
            {/*    className="themesflat-spacer clearfix"*/}
            {/*    data-desktop={0}*/}
            {/*    data-mobile={35}*/}
            {/*    data-smobile={35}*/}
            {/*  />*/}
            {/*  <div className="widget widget_tags">*/}
            {/*    <h2 className="widget-title margin-bottom-30">*/}
            {/*      <span>TAGS</span>*/}
            {/*    </h2>*/}
            {/*    <div className="tags-list">*/}
            {/*      <Link to="#">Building</Link>*/}
            {/*      <Link to="#">Smart House</Link>*/}
            {/*      <Link to="#">Costruction</Link>*/}
            {/*      <Link to="#">Villa</Link>*/}
            {/*      <Link to="#">Residential</Link>*/}
            {/*      <Link to="#">Interior</Link>*/}
            {/*      <Link to="#">Resort</Link>*/}
            {/*      <Link to="#">Commercial</Link>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
