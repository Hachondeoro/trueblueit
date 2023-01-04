import React, { Component, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import bannerhome from './data_banner';
import { request } from 'datoCMS/request.ts';

const isOdd = function (x) {
  return x & 1;
};

const Slider = () => {
  const [allBackgrounds, setAllBackgrounds] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    request(
      `allBackgrounds {
        image {
          url
        }
      }`,
    ).then(data => {
      setAllBackgrounds(data.allBackgrounds);
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      {isLoaded ? (
        <>
          {allBackgrounds.map((background, index) => {
            const bannerdata = isOdd(index) ? bannerhome[1] : bannerhome[0];
            console.log('bannerdata is: ', bannerdata);
            console.log('background.image.url is: ', background.image.url);

            return (
              <li data-transition="random" key={bannerdata.id}>
                <img
                  src={background.image.url}
                  alt="altimage"
                  data-bgposition="center center"
                  data-no-retina
                />
                <div
                  className={bannerdata.classnames}
                  data-x={bannerdata.datax}
                  data-hoffset={bannerdata.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={bannerdata.datavset1}
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
                  className={bannerdata.classtext}
                  data-x={bannerdata.datax}
                  data-hoffset={bannerdata.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={bannerdata.datavset2}
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
                  className={bannerdata.classtext}
                  data-x={bannerdata.datax}
                  data-hoffset={bannerdata.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={bannerdata.datavset3}
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
                  className={bannerdata.classbtn}
                  data-x={bannerdata.datax}
                  data-hoffset={bannerdata.datahset}
                  data-y="['middle','middle','middle','middle']"
                  data-voffset={bannerdata.datavset}
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
            );
          })}
        </>
      ) : null}
    </>
  );
  // return <ul>{mainContent()}</ul>;
};

export default withRouter(Slider);
