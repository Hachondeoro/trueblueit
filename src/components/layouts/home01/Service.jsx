import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidecard: [
        {
          id: 1,
          srcimg: 'assets/img/services/it-support.jpg',
          heading: 'IT Support',
          path: '/services/itsupport',
        },
        {
          id: 2,
          srcimg: 'assets/img/services/cyber-security.jpg',
          heading: 'Cyber Security',
          path: '/services/cybersecurity',
        },
        {
          id: 3,
          srcimg: 'assets/img/services/cloud-services.png',
          heading: 'Cloud Services',
          path: '/services/cloudservices',
        },
        {
          id: 4,
          srcimg: 'assets/img/services/microsoft365.jpg',
          heading: 'Microsoft 365',
          path: '/services/microsoft365',
        },
        {
          id: 5,
          srcimg: 'assets/img/services/pitch-training.png',
          heading: 'Pitch Training',
          path: '/services/pitchtraining',
        },
        {
          id: 6,
          srcimg: 'assets/img/services/web-design.jpg',
          heading: 'Web Design',
          path: '/services/webdesign',
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="themesflat-carousel-box data-effect clearfix"
        data-gap={30}
        data-column={3}
        data-column2={2}
        data-column3={1}
        data-auto="false"
      >
        <div className="row">
          {this.state.slidecard.map(data => (
            <div
              className="themesflat-image-box col-12 col-sm-4 style-1 has-icon icon-right w65 clearfix"
              key={data.id}
            >
              <Link to={data.path}>
                <div className="image-box-item">
                  <div className="inner">
                    <div className="thumb data-effect-item">
                      <img
                        src={data.srcimg}
                        alt="altimage"
                        style={{ objectFit: 'cover', height:"300px" }}


                      />
                      <div className="overlay-effect bg-color-accent" />
                    </div>
                    <div className="text-wrap">
                      <h5 className="heading">{data.heading}</h5>
                      <span className="icon-wrap">
                        <i className="fa fa-angle-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Service;
