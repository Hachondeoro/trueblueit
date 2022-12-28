import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import menus from '../menu';

class Header extends Component {
  render() {
    return (
      <header id="site-header">
        <div id="site-header-inner" className="container">
          <div className="wrap-inner clearfix">
            <div id="site-logo" className="clearfix">
              <div id="site-log-inner">
                <Link
                  to="/"
                  onClick={() => {
                    window.location.href = '/';
                  }}
                  rel="home"
                  className="main-logo"
                >
                  <img
                    src={this.props.data.logoweb}
                    alt="True Blue IT"
                    width={186}
                    height={39}
                    data-retina="/assets/img/trueblue-logo.png"
                    data-width={186}
                    data-height={39}
                  />
                </Link>
              </div>
            </div>
            <div className="mobile-button">
              <span />
            </div>
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                {menus.map(data => (
                  <li
                    className={
                      data.name === this.props.data.names
                        ? 'menu-item menu-item-has-children current-menu-item'
                        : 'menu-item menu-item-has-children'
                    }
                    key={data.id}
                  >
                    <Link
                      to={data.link}
                      onClick={() => {
                        window.location.href = data.link;
                      }}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
