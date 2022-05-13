import React, { useRef } from "react";
import lottie from "lottie-web";
import desktopSlider from "./secondslider2.json";
import mobileSlider from "./secondslider-mobile2.json";
import smoothscroll from './smoothscroll-polyfill';
import { navigate } from 'gatsby';


const Container = (props) => {
  smoothscroll.polyfill();
  const isBrowser = typeof window !== "undefined";
  const [sheight,setHeight] = React.useState(isBrowser?window.scrollY:0);
  const [isMobile,setIsMobile] = React.useState(isBrowser?window.scrollY:0);
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
      if (window.outerWidth < 992) {
        setIsMobile(true);
        if(window.scrollY>1900){
          var div = document.getElementsByClassName('accordion-collapse');
          var div2 = document.getElementsByClassName('accordion-button');
          for (let i = 0; i < div.length; i++) {
            div[i].classList.remove('show');
          }
          for (let i = 0; i < div2.length; i++) {
            div2[i].classList.add('collapsed');
          }
        }
        if(window.scrollY>1600){
          const scrollPosition = window.scrollY-1600;
          const maxFrames = anim.totalFrames;
          setHeight(scrollPosition);
          const frame = (maxFrames / 1) * (scrollPosition / (duration / 1));

          if(frame<225){
            anim.goToAndStop(frame, true);
          }
        }
      } else {
        setIsMobile(false);
        if(window.scrollY>2200){
          var div = document.getElementsByClassName('accordion-collapse');
          var div2 = document.getElementsByClassName('accordion-button');
          for (let i = 0; i < div.length; i++) {
            div[i].classList.remove('show');
          }
          for (let i = 0; i < div2.length; i++) {
            div2[i].classList.add('collapsed');
          }

          const scrollPosition = window.scrollY-2200;
          const maxFrames = anim.totalFrames;
          setHeight(scrollPosition);
          const frame = (maxFrames / 1) * (scrollPosition / (duration / 1));

          if(frame<231){
            anim.goToAndStop(frame, true);
          }
        }
      }
      
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    const onBtnClick = (e) => {
      if (window.outerWidth < 992) {
        if(e.target.id=='slide0'){
          window.scrollTo({top: 650+2200, left: 0, behavior: 'smooth' });
        }
        if(e.target.id=='slide1'){
          window.scrollTo({top: 1500+2200, left: 0, behavior: 'smooth' });
        }
        if(e.target.id=='slide2'){
          window.scrollTo({top: 2600+2200, left: 0, behavior: 'smooth' });
        }
        if(e.target.id=='slide3'){
          window.scrollTo({top: 5300, left: 0, behavior: 'smooth' });
        }
        if(e.target){console.log(window.scrollY)
          if(e.target.tagName=='path' && window.scrollY>2500 && window.scrollY<3000){
            navigate('/liquidation/');
          }
          else if(e.target.tagName=='path' && window.scrollY>3200 && window.scrollY<6114){
            navigate('/director-penalty-notice/#get-in-touch');
          }
        }
      }
      else{
        if(e.target.id=='slide0'){
          window.scrollTo({top: 900+2200, left: 0, behavior: 'smooth' });
        }
        if(e.target.id=='slide1'){
          window.scrollTo({top: 1700+2200, left: 0, behavior: 'smooth' });
        }
        if(e.target.id=='slide2'){
          window.scrollTo({top: 2800+2200, left: 0, behavior: 'smooth' });
        }
        if(e.target.id=='slide3'){
          window.scrollTo({top: 3700+2200, left: 0, behavior: 'smooth' });
        }
        if(e.target){console.log(window.scrollY)
          if(e.target.tagName=='path' && window.scrollY>2700 && window.scrollY<3700){
            navigate('/liquidation/');
          }          
          else if(e.target.tagName=='path' && window.scrollY>3700 && window.scrollY<4600){
            navigate('/restructuring/');
          }
          else if(e.target.tagName=='path' && window.scrollY>4600 && window.scrollY<5600){
            navigate('/restructuring/#heading3');
          }
          else if(e.target.tagName=='path' && window.scrollY>5600 && window.scrollY<6710){
            navigate('/insights/voluntary-administration/#doca');
          }
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
    
    <div className="container slider_height dpn_slider"><div className="slider_inner">
      <div className="row">
        <div className="col">
          <h2>{props.optionsTitle}</h2>
          <div dangerouslySetInnerHTML={{__html: props.optionsSubtext }} />
        </div>
      </div>
      <div className="slider_fix" style={sheight>300 && sheight<3800?{ position: "fixed",left: "0", right:"0", top: "100px"}:{ position: "relative", top: sheight<=400?"0px":"3400px"}}>
        <div className="justify-content-center serviceBtn-container">
          <ul className="service-option-container service_menu" id="service-option-container">
            <li className="service-option">
              <button className={sheight<=1500?"btn sliderBtn active":"btn sliderBtn"} id={"slide0"}>Liquidation</button>
            </li>
            <li className="service-option">
              <button className={sheight<=2400 && sheight>1500?"btn sliderBtn active":"btn sliderBtn"} id={"slide1"}>Restructure & turnaround</button>
            </li>
            <li className="service-option">
              <button className={sheight<=3300 && sheight>2400?"btn sliderBtn active":"btn sliderBtn"} id={"slide2"}>Administration</button>
            </li>
            <li className="service-option">
              <button className={sheight>3300?"btn sliderBtn active":"btn sliderBtn"} id={"slide3"}>DOCA</button>
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