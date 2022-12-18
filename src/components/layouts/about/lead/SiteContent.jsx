import React, { Component } from "react";
import { Link } from "react-router-dom";
class SiteContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          srcimg: "assets/img/testimonials/avatar-1-106x106.jpg",
          author: "Ignacio J. Reyes",
          postions: "Manager Human resources",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis",
        },
        {
          id: 2,
          srcimg: "assets/img/testimonials/avatar-2-106x106.jpg",
          author: "Dana lewis",
          postions: "Executive vice president",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis",
        },
        {
          id: 3,
          srcimg: "assets/img/testimonials/avatar-3-106x106.jpg",
          author: "Bill tomlinson",
          postions: "Manager, Aggregates",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis",
        },
        {
          id: 4,
          srcimg: "assets/img/testimonials/avatar-4-106x106.jpg",
          author: "Scott berquist",
          postions: "Maketing Manager",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis",
        },
      ],
    };
  }

  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={61}
            data-mobile={60}
            data-smobile={60}
          />
          <div className="themesflat-headings style-2 clearfix">
            <h2 className="heading">LEADERSHIP TEAM</h2>
            <div className="sep has-width w80 accent-bg clearfix" />
            <p className="sub-heading font-size-16 line-height-28 text-666 margin-top-27">
              With us you will have the peace of mind knowing that your dream
              home project is in the hands of a licensed fully insured building
              company.
            </p>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={40}
            data-mobile={35}
            data-smobile={35}
          />
          <div
            className="themesflat-content-box clearfix"
            data-margin="0 15px 0 0"
            data-mobilemargin="0 0 0 0"
          >
            <ol className="comment-list style-2">
              {this.state.comments.map((data) => (
                <li className="comment" key={data.id}>
                  <article className="comment-wrap clearfix">
                    <div className="gravatar">
                      <img alt="imagealt" src={data.srcimg} />
                    </div>
                    <div className="comment-content">
                      <div className="comment-meta">
                        <h6 className="comment-author">{data.author}</h6>
                        <span className="comment-position">
                          {data.postions}
                        </span>
                      </div>
                      <div className="comment-text">
                        <p>{data.text}</p>
                        <div className="socials">
                          <Link to="#" className="facebook">
                            <span className="fa fa-facebook-square" />
                          </Link>
                          <Link to="#" className="twitter">
                            <span className="fa fa-twitter" />
                          </Link>
                          <Link to="#" className="linkedin">
                            <span className="fa fa-linkedin-square" />
                          </Link>
                          <Link to="#" className="pinterest">
                            <span className="fa fa-pinterest-p" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={83}
            data-mobile={60}
            data-smobile={60}
          />
        </div>
      </div>
    );
  }
}

export default SiteContent;
