import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [
        {
          id: 1,
          text: 'To give you a start, we have listed below the various topics we can cover in Microsoft 365, however, we can create a customized course outline by mixing these up to reflect your specific needs.',
          item: [
            {
              idx: 1,
              content: 'Explore the Microsoft 365 Environment',
            },
            {
              idx: 2,
              content: 'Discover useful features in Outlook 365',
            },
            {
              idx: 3,
              content: 'Learn how to use OneDrive for file storage',
            },
            {
              idx: 4,
              content: 'Connect your desktop apps to Microsoft 365',
            },
            {
              idx: 5,
              content: 'Share Documents with colleagues',
            },
            {
              idx: 6,
              content: 'Collaborate online with colleagues in real-time',
            },
            {
              idx: 7,
              content: 'Introduction to Microsoft Teams',
            },
            {
              idx: 8,
              content: 'Discover other useful Microsoft apps',
            },
          ],
        },
        {
          id: 2,
          text: "Are you a student or professional looking to improve your presentation skills? Look no further than True Blue IT Services' Pitch Training Program! Our program is tailored to help you develop the confidence and knowledge needed to make a great impression in any setting. With our comprehensive training, you'll learn how to craft the perfect pitch, create powerful visuals, and deliver your message with impact. Take your career to the next level today with True Blue IT Services! Who is this program for:",
          item: [
            {
              idx: 1,
              content:
                'Professionals: Pitch training is designed for professionals who need to hone their communication and presentation skills. This includes entrepreneurs, salespeople, marketers, and business leaders who need to craft a compelling message and present that message effectively in order to succeed in their professional endeavors. The program is also beneficial for those who want to learn how to negotiate effectively and close deals.',
            },
            {
              idx: 2,
              content:
                'Students: Pitch training program provided by True blue IT services is suitable for students. The program is designed to help students develop their communication and presentation skills, which are essential for success in the professional world. The program provides students with the opportunity to practice and refine their pitching skills in a safe environment, gain valuable insights from experienced instructors, and build relationships with industry professionals.',
            },
          ],
        },
        {
          id: 3,
          text: 'Are you looking to create a website for your business or organization? Look no further than True Blue IT Services! Our experienced web design team will work with you to create a website that is tailored to your needs and goals. With our modern and user-friendly designs, you can be sure your website will be both visually appealing and functional. Contact us today and let us help you create a website that will take your business or organization to the next level!',
          item: [
            {
              idx: 1,
              content: 'Modern and user-friendly designs',
            },
            {
              idx: 2,
              content: 'Visually appealing and functional',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <div
          className="themesflat-content-box clearfix"
          data-margin="0 18px 0 0"
          data-mobilemargin="0 0 0 0"
        >
          <div className="themesflat-headings style-1 clearfix">
            <h2 className="heading">OVERVIEW</h2>
            <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={38}
            data-mobile={35}
            data-smobile={35}
          />
          <div className="themesflat-tabs style-1 clearfix">
            <ul className="tab-title clearfix">
              <li className="item-title active">
                <span className="inner">Courses</span>
              </li>
              <li className="item-title">
                <span className="inner">Pitch Training</span>
              </li>
              <li className="item-title">
                <span className="inner">Web Design</span>
              </li>
            </ul>
            <div className="tab-content-wrap clearfix">
              {this.state.tab.map(data => (
                <div className="tab-content" key={data.id}>
                  <div className="item-content">
                    <p>{data.text}</p>
                    {data.item.map(index => (
                      <div
                        className="themesflat-list has-icon style-1 icon-left ofset-padding-32 clearfix"
                        key={index.idx}
                      >
                        <div className="inner">
                          <span className="item">
                            <span className="icon">
                              <i className="fa fa-check-square" />
                            </span>
                            <span className="text">{index.content}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* /.tab-content-wrap */}
          </div>
          {/* /.themesflat-tabs */}
        </div>
        {/* /.themesflat-content-box */}
      </div>
    );
  }
}

export default Overview;
