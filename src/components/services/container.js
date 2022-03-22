import React, { useRef } from "react";
import lottie from "lottie-web";
import desktopSlider from "./secondslider.json";
import mobileSlider from "./secondslider-mobile.json";
import smoothscroll from './smoothscroll-polyfill';
import { navigate } from 'gatsby';


const Container = (props) => {
  smoothscroll.polyfill();
  const isBrowser = typeof window !== "undefined"
  const [sheight,setHeight] = React.useState(isBrowser?window.scrollY:0);
  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: document.getElementById('serviceslider'),
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: window.outerWidth<=1024?mobileSlider:desktopSlider
    });
    lottie.setSpeed(0);

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;
      setHeight(scrollPosition);
      const frame = (maxFrames / 1) * (scrollPosition / (duration / 1));
      if(frame<190){
        anim.goToAndStop(frame, true);
      }
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    const onBtnClick = (e) => {
      if(e.target.id=='slide0'){
        window.scrollTo({top: 1200, left: 0, behavior: 'smooth' });
      }
      if(e.target.id=='slide1'){
        window.scrollTo({top: 2195, left: 0, behavior: 'smooth' });
      }
      if(e.target.id=='slide2'){
        window.scrollTo({top: 2900, left: 0, behavior: 'smooth' });
      }
      if(e.target){
        if (e.target.href) {
          if(e.target.href.animVal=='images/img_2.jpg'){
            navigate('/corporate-advisory/');
          }
        }
        else if(e.target.tagName=='path' && window.scrollY>1200 && window.scrollY<2500){
          navigate('/restructuring/');
        }
        else if(e.target.tagName=='path' && window.scrollY>2500 && window.scrollY<3000){
          navigate('/insolvency/');
        }
      }
    };



    document.addEventListener("scroll", onScroll);
    document.addEventListener("click", onBtnClick);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return <section id="services">
    
    <div className="container slider_height"><div className="slider_inner">
      <div className="row">
        <div className="col">
          <h2>{props.serviceTitle}</h2>
        </div>
      </div>
      <div className="slider_fix" style={sheight>767 && sheight<2901?{ position: "fixed",left: "0", right:"0", top: "100px"}:{ position: "relative", top: sheight<=767?"0px":"1980px"}}>
        <div className="justify-content-center serviceBtn-container">
          <ul className="service-option-container service_menu" id="service-option-container">
            <li className="service-option">
              <button className={sheight<=1200?"btn sliderBtn active":"btn sliderBtn"} id={"slide0"}>Corporate Advisory</button>
            </li>
            <li className="service-option">
              <button className={sheight<=2195 && sheight>1200?"btn sliderBtn active":"btn sliderBtn"} id={"slide1"}>Restructuring</button>
            </li>
            <li className="service-option">
              <button className={sheight>2195?"btn sliderBtn active":"btn sliderBtn"} id={"slide2"}>Insolvency</button>
            </li>
          </ul>  
        </div>
        <div className="row service-slider" id="service-slider">
          <div className="services-slider" id="serviceslider"></div>
        </div>
      </div>
      </div>
    </div>
  </section>
}

export default Container