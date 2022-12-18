import React, { Component } from "react";
import { Link } from "react-router-dom";
class SidebarBlog extends Component {
  render() {
    return (
      <div id="sidebar">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_search">
            <form
              action="#"
              method="get"
              role="search"
              className="search-form style-1"
            >
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
                defaultValue={""}
                name="s"
                title="Search for"
              />
              <button className="search-submit" type="submit" title="Search">
                Search
              </button>
            </form>
          </div>
          {/* /.widget_search */}
          <div className="widget widget_follow">
            <h2 className="widget-title">
              <span>FOLLOW US</span>
            </h2>
            <div className="follow-wrap clearfix col3 g8">
              <div className="follow-item facebook">
                <div className="inner">
                  <span className="socials">
                    <Link to="#">
                      <i className="fa fa-facebook" />
                    </Link>
                    <span className="text">
                      43217 <br /> likes
                    </span>
                  </span>
                </div>
              </div>
              <div className="follow-item twitter">
                <div className="inner">
                  <span className="socials">
                    <Link to="#">
                      <i className="fa fa-twitter" />
                    </Link>
                    <span className="text">3752 flowers</span>
                  </span>
                </div>
              </div>
              <div className="follow-item google">
                <div className="inner">
                  <span className="socials">
                    <Link to="#">
                      <i className="fa fa-google" />
                    </Link>
                    <span className="text">432 contacter</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* /.widget_follow */}
          <div className="widget widget_lastest">
            <h2 className="widget-title">
              <span>PRECENT POST</span>
            </h2>
            <ul className="lastest-posts data-effect clearfix">
              <li className="clearfix">
                <div className="thumb data-effect-item has-effect-icon ">
                  <img src="assets/img/news/post-1-65x65.jpg" alt="imagealt" />
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <Link to="/blog-single" className="icon-2" />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <Link to="/blog-single">
                      SMART BUILDING WITH CONCRETE SUSTAINABLE
                    </Link>
                  </h3>
                  <span className="post-date">
                    <span className="entry-date">29 June 2018</span>
                  </span>
                </div>
              </li>
              <li className="clearfix">
                <div className="thumb data-effect-item has-effect-icon">
                  <img src="assets/img/news/post-2-65x65.jpg" alt="imagealt" />
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <Link to="/blog-single" className="icon-2" />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <Link to="/blog-single">
                      HI-TECH WOODEN HOUSE BUILT WITHOUT GLUE
                    </Link>
                  </h3>
                  <span className="post-date">
                    <span className="entry-date">31 June 2018</span>
                  </span>
                </div>
              </li>
              <li className="clearfix">
                <div className="thumb data-effect-item has-effect-icon">
                  <img src="assets/img/news/post-3-65x65.jpg" alt="imagealt" />
                  <div className="overlay-effect bg-color-2" />
                  <div className="elm-link">
                    <Link to="/blog-single" className="icon-2" />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <Link to="/blog-single">
                      HI-TECH WOODEN HOUSE BUILT WITHOUT GLUE
                    </Link>
                  </h3>
                  <span className="post-date">
                    <span className="entry-date">31 June 2018</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="widget widget_tags margin-top-55">
            <h2 className="widget-title">
              <span>TAGS</span>
            </h2>
            <div className="tags-list">
              <Link to="#">Building</Link>
              <Link to="#">Smart House</Link>
              <Link to="#">Costruction</Link>
              <Link to="#">Villa</Link>
              <Link to="#">Residential</Link>
              <Link to="#">Interior</Link>
              <Link to="#">Resort</Link>
              <Link to="#">Commercial</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarBlog;
