import React, { Component } from "react";
import { Link } from "react-router-dom";
class SingleContent extends Component {
  render() {
    return (
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media data-effect-item has-effect-icon offset-v-25 offset-h-24 clerafix">
              <Link to="/blog-single">
                <img src="assets/img/news/post-1-840x385.jpg" alt="altimage" />
              </Link>
              <div className="post-calendar">
                <span className="inner">
                  <span className="entry-calendar">
                    <span className="day">23</span>
                    <span className="month">MAY</span>
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
                  <Link to="/blog-single">
                    BIG TECH WILL GET BIGGER IN 2018, WHILE MALLER PLAYERS LOOK
                    FOR EXITS
                  </Link>
                </span>
              </h2>
              <div className="post-meta">
                <div className="post-meta-content">
                  <div className="post-meta-content-inner">
                    <span className="post-date item">
                      <span className="inner">
                        <span className="entry-date">May 23, 2018</span>
                      </span>
                    </span>
                    <span className="post-by-author item">
                      <span className="inner">
                        <Link to="#">By: Admin</Link>
                      </span>
                    </span>
                    <span className="comment item">
                      <span className="inner">
                        <Link to="#">3 Comments</Link>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-content post-excerpt margin-bottom-43">
                <p className="line-height-27 letter-spacing-005">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
                  diam nonummy nibh euismod tincid unt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore
                </p>
                <div className="box-excerpt clearfix">
                  <div className="thumb">
                    <img
                      src="assets/img/news/post-1-251x196.jpg"
                      alt="altimage"
                    />
                  </div>
                  <div className="text">
                    <p className="line-height-27 letter-spacing-005">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium dolorem laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores.Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit doli. Aenean
                      commodo ligula eget dolor. Aenean massa. Cumtipsu sociis
                      natoque penatibus et magnis dis parturient montesti,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eutu, pretiumem
                    </p>
                  </div>
                </div>
                <p className="line-height-27 no-margin letter-spacing-01">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
                  diam nonummy nibh euismod tincid unt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit sed diam.
                </p>
              </div>
              <div className="post-tags-socials clearfix">
                <div className="post-tags ">
                  <span>Tags :</span>
                  <Link to="#">Building</Link>
                  <Link to="#">Smart House</Link>
                  <Link to="#">Villa</Link>
                </div>
                <div className="post-socials ">
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
          <div className="themesflat-pagination clearfix no-border padding-top-17">
            <ul className="page-prev-next">
              <li>
                <Link to="#" className="prev">
                  Previous Article
                </Link>
              </li>
              <li className="text-right">
                <Link to="#" className="next">
                  Next Article
                </Link>
              </li>
            </ul>
          </div>
          <div id="comments" className="comments-area">
            <h2 className="comments-title">3 COMMENTS</h2>
            <ol className="comment-list">
              <li className="comment">
                <article className="comment-wrap clearfix">
                  <div className="gravatar">
                    <img
                      alt="altimage"
                      src="assets/img/testimonials/avatar-1-80x80.jpg"
                    />
                  </div>
                  <div className="comment-content">
                    <div className="comment-meta">
                      <h6 className="comment-author">NicheTheme</h6>
                      <span className="comment-time">
                        May 11, 2018 - at 11:00 am
                      </span>
                      <span className="comment-reply">
                        <Link className="comment-reply-link" to="#">
                          REPLY
                        </Link>
                      </span>
                    </div>
                    <div className="comment-text">
                      <p>
                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget
                        risus at ipsum blandit ornare vel sed velit. Proin
                        gravida arcu nisl, a dignissim mauris placerat id.
                        Vivamus interdum urna at sapien varius elementum.{" "}
                      </p>
                    </div>
                  </div>
                </article>
                <ul className="children">
                  <li className="comment">
                    <article className="comment-wrap clearfix">
                      <div className="gravatar">
                        <img
                          alt="altimage"
                          src="assets/img/testimonials/avatar-2-80x80.jpg"
                        />
                      </div>
                      <div className="comment-content">
                        <div className="comment-meta">
                          <h6 className="comment-author">themesflat</h6>
                          <span className="comment-time">
                            {" "}
                            May 11, 2018 - at 11:00 am
                          </span>
                          <span className="comment-reply">
                            <Link className="comment-reply-link" to="#">
                              REPLY
                            </Link>
                          </span>
                        </div>
                        <div className="comment-text">
                          <p>
                            Fusce ornare mi vel risus porttitor dignissim. Nunc
                            eget risus at ipsum blandit ornare vel sed velit.
                            Proin gravida arcu nisl, a dignissim mauris placerat
                            id.
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </li>
              <li className="comment">
                <article className="comment-wrap  clearfix">
                  <div className="gravatar">
                    <img
                      alt="altimage"
                      src="assets/img/testimonials/avatar-1-80x80.jpg"
                    />
                  </div>
                  <div className="comment-content">
                    <div className="comment-meta">
                      <h6 className="comment-author">NicheTheme</h6>
                      <span className="comment-time">
                        May 11, 2018 - at 11:00 am
                      </span>
                      <span className="comment-reply">
                        <Link className="comment-reply-link" to="#">
                          REPLY
                        </Link>
                      </span>
                    </div>
                    <div className="comment-text">
                      <p>
                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget
                        risus at ipsum blandit ornare vel sed velit. Proin
                        gravida arcu nisl, a dignissim mauris placerat id.
                        Vivamus interdum urna at sapien varius elementum.{" "}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            </ol>
            <div id="respond" className="comment-respond">
              <h3
                id="reply-title"
                className="comment-reply-title margin-bottom-31"
              >
                Leave a Comment
              </h3>
              <form
                action="#"
                method="post"
                id="commentform"
                className="comment-form"
              >
                <div className="text-wrap clearfix">
                  <fieldset className="name-wrap">
                    <input
                      type="text"
                      id="author"
                      className="tb-my-input"
                      name="author"
                      tabIndex={1}
                      placeholder="Name*"
                      defaultValue={""}
                      size={32}
                      aria-required="true"
                    />
                  </fieldset>
                  <fieldset className="email-wrap">
                    <input
                      type="email"
                      id="email"
                      className="tb-my-input"
                      name="email"
                      tabIndex={2}
                      placeholder="Email*"
                      defaultValue={""}
                      size={32}
                      aria-required="true"
                    />
                  </fieldset>
                </div>
                <fieldset className="message-wrap">
                  <textarea
                    id="comment-message"
                    name="comment"
                    rows={8}
                    tabIndex={4}
                    placeholder="Message*"
                    aria-required="true"
                    defaultValue={""}
                  />
                </fieldset>
                <p className="form-submit">
                  <input
                    name="submit"
                    type="submit"
                    id="comment-reply"
                    className="submit"
                    defaultValue="SEND US"
                  />
                  <input
                    type="hidden"
                    name="comment_post_ID"
                    defaultValue={100}
                    id="comment_post_ID"
                  />
                  <input
                    type="hidden"
                    name="comment_parent"
                    id="comment_parent"
                    defaultValue={0}
                  />
                </p>
              </form>
            </div>
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

export default SingleContent;
