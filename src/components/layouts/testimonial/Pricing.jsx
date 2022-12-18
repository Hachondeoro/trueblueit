import React, { Component } from "react";
import { Link } from "react-router-dom";
class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          classnames: "themesflat-price-table style-1 clearfix",
          title: "PACKAGE 01",
          figure: "10",
          popular: "price-none",
          classli01: "linethrough",
          classli02: "linethrough",
          classli03: "linethrough",
        },
        {
          id: 2,
          classnames: "themesflat-price-table style-1 active clearfix",
          title: "PACKAGE 02",
          figure: "20",
          popular: "tag",
          classli01: "",
          classli02: "linethrough",
          classli03: "linethrough",
        },
        {
          id: 3,
          classnames: "themesflat-price-table style-1 clearfix",
          title: "PACKAGE 03",
          figure: "30",
          popular: "price-none",
          classli01: "",
          classli02: "",
          classli03: "linethrough",
        },
        {
          id: 4,
          classnames: "themesflat-price-table style-1 clearfix",
          title: "PACKAGE 04",
          figure: "50",
          popular: "price-none",
          classli01: "",
          classli02: "",
          classli03: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row-price-table col4 clearfix">
        {this.state.pricing.map((data) => (
          <div className={data.classnames} key={data.id}>
            <div className="price-item">
              <div className="inner">
                <div className="price-table-name">
                  <h5 className="title">{data.title}</h5>
                  <Link to="#" className={data.popular}>
                    Popular
                  </Link>
                </div>
                <div className="sep has-width w80 accent-bg clearfix" />
                <div className="price-table-price clearfix">
                  <div className="price-wrap">
                    <span className="figure">{data.figure}</span>
                    <span className="currency-month right-38">
                      <span className="currency">$</span>
                      <span className="month">MONTH</span>
                    </span>
                  </div>
                </div>
                <div className="price-table-features clearfix">
                  <ul className="list-content">
                    <li>
                      <i className="autora-icon-long-arrow-right" />
                      <span>Design Consultancy</span>
                    </li>
                    <li>
                      <i className="autora-icon-long-arrow-right" />
                      <span>Logistics services</span>
                    </li>
                    <li className={data.classli01}>
                      <i className="autora-icon-long-arrow-right" />
                      <span>Interior Design</span>
                    </li>
                    <li className={data.classli02}>
                      <i className="autora-icon-long-arrow-right" />
                      <span>Top Expert</span>
                    </li>
                    <li className={data.classli03}>
                      <i className="autora-icon-long-arrow-right" />
                      <span>24/7 support</span>
                    </li>
                  </ul>
                  <div className="price-table-button">
                    <Link to="#" className="themesflat-button bg-accent">
                      GET IT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Pricing;
