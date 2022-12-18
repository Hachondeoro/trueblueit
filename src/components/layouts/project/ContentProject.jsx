import React, { Component } from "react";

class ContentProject extends Component {
  render() {
    return (
      <div className="detail-gallery">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={21}
          data-mobile={21}
          data-smobile={21}
        />
        <div
          className="themesflat-gallery style-2 has-arrows arrow-center arrow-circle offset-v-82 has-thumb w185 clearfix"
          data-gap={0}
          data-column={1}
          data-column2={1}
          data-column3={1}
          data-auto="false"
        >
          <div className="owl-carousel owl-theme">
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/gallery/gallery-1-800x450.jpg"
                    alt="imagealt"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/gallery/gallery-2-800x450.jpg"
                    alt="imagealt"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/gallery/gallery-3-800x450.jpg"
                    alt="imagealt"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="inner">
                <div className="thumb">
                  <img
                    src="assets/img/gallery/gallery-4-800x450.jpg"
                    alt="imagealt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.themesflat-cousel-box */}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={40}
          data-mobile={40}
          data-smobile={40}
        />
        <div className="flat-content-wrap style-3 clearfix">
          <h5 className="title">PROJECT DESCRIPTION</h5>
          <div className="sep has-width w60 accent-bg margin-top-18 clearfix" />
          <p className="margin-top-28">
            The ten-storey, 325,000 SF Krembil Discovery Centre provides the
            Toronto Western Hospital with a new research and rehabilitation
            facility. The Integrated Project Delivery contract included the base
            building core and shell (and associated functional space), interior
            fit-up of two floors of the rehab solutions space, two floors of wet
            labs, a single floor vivarium and the associated interstitial floor
          </p>
          <p>
            From November 2013 to April 2014, EllisDon was awarded an additional
            Lump Sum contract for $5 million. This additional scope of work
            included a lab fit- up on the fourth level of the Krembil Discovery
            Centre.
          </p>
        </div>
      </div>
    );
  }
}

export default ContentProject;
