import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bannerhome1 from './data_banner';
import { request } from '../../../datoCMS/request.ts';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function Slider() {
  const [videoDesktop, setVideoDesktop] = useState([]);
  const [videoMobile, setVideoMobile] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    request(
      `allBackgroundvideomobiles {
        video {
          url
        }
      }
      allBackgroundvideodesktops {
        video {
          url
        }
      }`,
    ).then(data => {
      console.log(data);
      setVideoDesktop(data.allBackgroundvideodesktops);
      setVideoMobile(data.allBackgroundvideomobiles);
      setIsLoaded(true);
    });
  }, []);

  return (
    <ul>
      {isLoaded ? (
        <>
          <video className="videoTag" autoPlay loop muted>
            <source
              src={width > 500 ? videoDesktop[0].video.url : videoMobile[0].video.url}
              type="video/mp4"
            />
          </video>
        </>
      ) : null}
      {bannerhome1.map(data => (
        <li data-transition="random" key={data.id}>
          {/*<img src={data.srcimg} alt="altimage" data-bgposition="center center" data-no-retina />*/}
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
    </ul>
  );
}
