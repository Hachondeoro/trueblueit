import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import bannerhome1 from './data_banner';
import bannerhome2 from '../home02/data_banner';

class Slider extends Component {
  render() {
    const { location } = this.props;
    const mainContent = () => {
      if (location.pathname === '/') {
        return (
          <>
            {bannerhome1.map(data => (
              <li data-transition="random" key={data.id}>
                <img
                  src={data.srcimg}
                  alt="altimage"
                  data-bgposition="center center"
                  data-no-retina
                />
                <div
                  className={data.classnames}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset1}
                  data-fontsize="['20','20','20','16']"
                  data-lineheight="['70','70','40','24']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={700}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  True Blue IT Services
                </div>
                <div
                  className={data.classtext}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset2}
                  data-fontsize="['52','52','42','32']"
                  data-lineheight="['65','65','45','35']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  UNLOCK THE POWER
                </div>
                <div
                  className={data.classtext}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset3}
                  data-fontsize="['52','52','42','32']"
                  data-lineheight="['65','65','45','35']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  OF TECHNOLOGY WITH US!
                </div>
                <div
                  className={data.classbtn}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset}
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  <Link
                    to="/contact"
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                    className="themesflat-button bg-accent big"
                  >
                    <span>GET IN TOUCH</span>
                  </Link>
                </div>
              </li>
            ))}
          </>
        );
      } else if (location.pathname === '/home-02') {
        return (
          <>
            {bannerhome2.map(data => (
              <li data-transition="random" key={data.id}>
                <img
                  src={data.srcimg}
                  alt="altimage"
                  data-bgposition="center center"
                  data-no-retina
                />
                <div
                  className={data.classnames}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset1}
                  data-fontsize="['20','20','20','16']"
                  data-lineheight="['70','70','40','24']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={700}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  A GLOBAL LEADER IN INFRASTRUCTURE
                </div>
                <div
                  className={data.classtext}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset2}
                  data-fontsize="['52','52','42','32']"
                  data-lineheight="['65','65','45','35']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  WE WILL BE HAPPY
                </div>
                <div
                  className={data.classtext}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset3}
                  data-fontsize="['52','52','42','32']"
                  data-lineheight="['65','65','45','35']"
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  TO TAKE CARE OF YOUR WORK
                </div>
                <div
                  className={data.classbtn}
                  data-x={data.datax}
                  data-hoffset={data.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={data.datavset}
                  data-width="full"
                  data-height="none"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                  data-mask_in="x:0px;y:[100%];"
                  data-mask_out="x:inherit;y:inherit;"
                  data-start={1000}
                  data-splitin="none"
                  data-splitout="none"
                  data-responsive_offset="on"
                >
                  <Link
                    to="/contact"
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                    className="themesflat-button bg-accent big"
                  >
                    <span>GET IN TOUCH</span>
                  </Link>
                </div>
              </li>
            ))}
          </>
        );
      }
    };
    return <ul>{mainContent()}</ul>;
  }
}

export default withRouter(Slider);
