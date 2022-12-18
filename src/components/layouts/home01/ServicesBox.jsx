import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServicesBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardbox: [
        {
          id: 1,
          colspan: [
            {
              idx: 1,
              icon: 'autora-icon-build',
              title: 'MICROSOFT 365',
              text: 'Have a better understanding of what Microsoft 365 is and does',
            },
          ],
          colleft: [
            {
              idx: 1,
              icon: 'autora-icon-hat-outline',
              title: 'NAVIGATION',
              text: 'Navigate around Microsoft 365 environment',
            },
          ],
        },
        {
          id: 2,
          colspan: [
            {
              idx: 1,
              icon: 'autora-icon-author-outline',
              title: 'OFFICE',
              text: 'Create, open and edit documents using Office web apps',
            },
          ],
          colleft: [
            {
              idx: 1,
              icon: 'autora-icon-build-home',
              title: 'OUTLOOK',
              text: 'Send and receive emails and manage contacts using Outlook web app',
            },
          ],
        },
        {
          id: 3,
          colspan: [
            {
              idx: 1,
              icon: 'autora-icon-building-outline',
              title: 'ONE DRIVE',
              text: 'Learn about OneDrive and how I can collaborate online',
            },
          ],
          colleft: [
            {
              idx: 1,
              icon: 'autora-icon-hat-outline',
              title: 'MICROSOFT TEAMS',
              text: 'Find out more about Microsoft Teams',
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className="themesflat-row gutter-30 clearfix">
        {this.state.cardbox.map(data => (
          <div className="col span_1_of_4" key={data.id}>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={35}
              data-smobile={35}
            />
            {data.colspan.map(spandata => (
              <div
                className="themesflat-icon-box icon-left accent-color style-2 clearfix"
                key={spandata.idx}
              >
                <div className="icon-wrap">
                  <i className={spandata.icon} />
                </div>
                <div className="text-wrap">
                  <h5 className="heading">
                    <Link to="#">{spandata.title}</Link>
                  </h5>
                  <p className="sub-heading">{spandata.text}</p>
                </div>
              </div>
            ))}
            <div
              className="themesflat-spacer clearfix"
              data-desktop={62}
              data-mobile={35}
              data-smobile={35}
            />
            {data.colleft.map(leftcol => (
              <div
                className="themesflat-icon-box icon-left accent-color style-2 clearfix"
                key={leftcol.idx}
              >
                <div className="icon-wrap font-size-35 line-height-50">
                  <i className={leftcol.icon} />
                </div>
                <div className="text-wrap">
                  <h5 className="heading">
                    <Link to="#">{leftcol.title}</Link>
                  </h5>
                  <p className="sub-heading margin-top-18">{leftcol.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ServicesBox;
