import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          id: 1,
          name: 'Home',
          links: '/',
        },
        {
          id: 2,
          name: 'About Us',
          links: '/about-us',
        },
        {
          id: 3,
          name: 'Services',
          links: '/services',
        },
        {
          id: 4,
          name: 'Projects',
          links: '/project',
        },
        {
          id: 5,
          name: 'Page',
          links: '/page-testimonial',
        },
        {
          id: 6,
          name: 'Blog',
          links: '/blog',
        },
        {
          id: 7,
          name: 'Contact',
          links: '/contact-01',
        },
      ],
    };
  }

  render() {
    return (
      <div id="bottom" className="clearfix has-spacer">
        <div id="bottom-bar-inner" className="container">
          <div className="bottom-bar-inner-wrap">
            <div className="bottom-bar-content">
              <div id="copyright">
                ©{' '}
                <span className="text">
                  True Blue IT Services. Design{' '}
                  <Link to="#" className="text-accent">
                    by Frank Espinoza
                  </Link>{' '}
                </span>
              </div>
            </div>
            {/* /.bottom-bar-content */}
            <div className="bottom-bar-menu">
              <ul className="bottom-nav">
                {this.state.menus.map(data => (
                  <li
                    className={
                      data.name === this.props.data.names
                        ? 'menu-item current-menu-item'
                        : 'menu-item'
                    }
                    key={data.id}
                  >
                    <Link
                      to={data.links}
                      onClick={() => {
                        window.location.href = data.links;
                      }}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BottomBar);
