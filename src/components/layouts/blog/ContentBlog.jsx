import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContentBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          aritcles: "hentry data-effect",
          classnames:
            "post-media has-effect-icon offset-v-25 offset-h-24 data-effect-item clerafix",
          srcimg: "assets/img/news/post-1-840x385.jpg",
          title:
            "BIG TECH WILL GET BIGGER IN 2018, WHILE MALLER PLAYERS LOOK FOR EXITS",
          day: "23",
          month: "MAY",
          author: "Admin",
          comments: "3",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
        },
        {
          id: 2,
          srcimg: "assets/img/news/post-2-840x385.jpg",
          aritcles: "hentry data-effect",
          classnames:
            "post-media data-effect-item has-effect-icon offset-v-25 offset-h-24clerafix",
          title:
            "BIG TECH WILL GET BIGGER IN 2018, WHILE MALLER PLAYERS LOOK FOR EXITS",
          day: "23",
          month: "MAY",
          author: "Admin",
          comments: "3",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
        },
        {
          id: 3,
          srcimg: "assets/img/news/post-3-840x385.jpg",
          aritcles: "hentry margin-top-33 padding-top-45 data-effect",
          classnames:
            "post-media data-effect-item has-effect-icon offset-v-25 offset-h-24 clerafix",
          title:
            "BIG TECH WILL GET BIGGER IN 2018, WHILE MALLER PLAYERS LOOK FOR EXITS",
          day: "23",
          month: "MAY",
          author: "Admin",
          comments: "3",
          descriptions:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
        },
      ],
    };
  }

  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          {this.state.blogs.map((data) => (
            <article className={data.aritcles} key={data.id}>
              <div className={data.classnames}>
                <Link to="/blog-single">
                  <img src={data.srcimg} alt="altimage" />
                </Link>
                <div className="post-calendar">
                  <span className="inner">
                    <span className="entry-calendar">
                      <span className="day">{data.day}</span>
                      <span className="month">{data.month}</span>
                    </span>
                  </span>
                </div>
                <div className="overlay-effect bg-color-1" />
                <div className="elm-link">
                  <Link to="/blog-single" className="icon-1" />
                </div>
              </div>
              <div className="post-content-wrap clearfix">
                <h2 className="post-title">
                  <span className="post-title-inner">
                    <Link to="/blog-single">{data.title}</Link>
                  </span>
                </h2>
                <div className="post-meta">
                  <div className="post-meta-content">
                    <div className="post-meta-content-inner">
                      <span className="post-date item">
                        <span className="inner">
                          <span className="entry-date">
                            {data.month}
                            {data.day}, 2018
                          </span>
                        </span>
                      </span>
                      <span className="post-by-author item">
                        <span className="inner">
                          <Link to="#">
                            By:
                            {data.author}
                          </Link>
                        </span>
                      </span>
                      <span className="comment item">
                        <span className="inner">
                          <Link to="#">
                            {data.comments}
                            Comments
                          </Link>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="post-content post-excerpt">
                  <p>{data.descriptions}</p>
                </div>
                <div className="post-read-more">
                  <div className="post-link">
                    <Link to="page-blog-single.html">READ MORE</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="themesflat-pagination clearfix">
            <ul>
              <li>
                <Link to="#" className="page-numbers prev">
                  <span className="fa fa-angle-left" />
                </Link>
              </li>
              <li>
                <Link to="#" className="page-numbers current">
                  1
                </Link>
              </li>
              <li>
                <Link to="#" className="page-numbers">
                  2
                </Link>
              </li>
              <li>
                <Link to="#" className="page-numbers next">
                  <span className="fa fa-angle-right" />
                </Link>
              </li>
            </ul>
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

export default ContentBlog;
