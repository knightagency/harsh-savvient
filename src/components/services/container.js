import * as React from "react"
import Slider from "react-slick";
import { Link } from "gatsby";
import Buttons from "./buttons";
import { useRef } from "react";

const serviceSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ],
  afterChange: index => {
    const tiles = document.getElementsByClassName('sliderBtn');
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].classList.remove("active");
    }
    document.getElementById('serviceSlidekey' + Math.round(index)).classList.add('active');

    if (window.screen.width < 500) {
      document.getElementById('service-option-container').style.marginLeft = Math.round(index) * -25 + '%';
    }
    else {
      document.getElementById('service-option-container').style.marginLeft = '0px';
    }
  }
}

const Container = (props) => {
  const slide = useRef(null);
  React.useEffect(() => {
    let cT = 0;
    window.addEventListener('scroll', function (e) {
      if (document.getElementById('services') !== "null" && window.pageYOffset > document.getElementById('services').offsetTop) {
        //console.log(e);
        const ul = document.getElementById("service-option-container");
        if (!ul.children[ul.children.length - 1].children[0].classList.contains('active')) {
          window.scrollTo(0, document.getElementById('services').offsetTop)
          if (cT === 0) {
            document.querySelectorAll('#services .sliderBtn').forEach(n => n.classList.remove('active'))
            slide.current.slickNext();
            cT = 1;
          }
          setTimeout(() => {
            cT = 0;
          },1500)
        }
        //e.preventDefault();
      }
    });
  }, [])
  return <section id="services">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{props.serviceTitle}</h2>
        </div>
      </div>
      <Buttons buttonData={props.data} refSlide={slide} />
      <div className="row service-slider offset-md-2 offset-lg-2" id="service-slider">
        <Slider ref={slide} {...serviceSettings} className="services-slider">
          {props.data.map((d, i) => {
            return <div className="" key={i}>
              <div className="col-11 col-md-6 col-lg-6 service-slide">
                <div className={"serv-img-container img" + i}>
                  <div className="test position-relative">
                    <img className="img-fluid service-image" src={d.serviceImage?.mediaItemUrl} alt={d.serviceImage?.altText} />
                  </div>
                  <div className={"ctn" + i}>
                    <h2>{d.serviceTitle}</h2>
                    <p>{d.serviceDecription}</p>
                    <Link to={d.servicePageUrl} className="btn btn-primary">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          })}
        </Slider>
      </div>
    </div>
  </section>
}

export default Container