import * as React from "react"
import { useState, useRef } from "react"
import Slider from "react-slick";
import { Link } from "gatsby";

const settings = {
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const popupSettings = {
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
};

const PeopleList = (props) => {
  const [showAll, setShowAll] = useState(props.showAll);
  const [showPopup, setShowPopup] = useState(0);
  const slide = useRef(null);
  return (
    <section className="news-list">
      <div className="container">
        <div className="row people-list">
          {props.data.map((d, key) => {
            return showAll == 0 && key > 5 ? "" : 
            <div className="col-lg-4 col-md-12  mt-4" key={key}>
              <div className="listbg">
                <img className="img-fluid" style={{ width: "100%" }} src={d.img?.mediaItemUrl} alt={d.img?.altTxt} />
                <h4 className="px-4">{d.title}</h4>
                <h5 className="px-4 py-1">{d.subtitle}</h5>
                <p className="py-1 px-4" style={{ minHeight: "70px" }}  dangerouslySetInnerHTML={{ __html: d.text }}></p>
                <div>
                  <a href={"mailto:" + d.email} className="pb-2 px-4 d-inline-block"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                  <a href={"tel:" + d.phone} className="pb-2 d-inline-block px-right"><i className="fa fa-phone" aria-hidden="true"></i></a>
                  <a href={d.linkedin} className="pb-2 d-inline-block"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
                {d.content && d.content.length > 0 && <a className="ps-4 pe-4 px-4" href="#" onClick={(e) => { e.preventDefault(); setShowPopup(1); console.log(key); slide.current.slickGoTo(key); }}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></a>}
              </div>
            </div>
          })}
        </div>
        <div className="row">
          <Slider {...settings} className="testimonial-slider people-slider detail">
            {props.data.map((d, key) => {
              return <div className="col-lg-4 col-md-12  mt-4 pe-4" key={key}>
                <div className="listbg">
                  <img className="img-fluid" style={{ width: "100%" }} src={d.img?.mediaItemUrl} alt={d.img?.altTxt} />
                  <h4 className="px-4">{d.title}</h4>
                  <h5 className="px-4 py-1">{d.subtitle}</h5>
                  <p className="py-1 px-4" style={{ minHeight: "70px" }}  dangerouslySetInnerHTML={{ __html: d.text }}></p>
                  <div>
                    <a href={"mailto:" + d.email} className="pb-2 px-4 d-inline-block"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                    <a href={"tel:" + d.phone} className="pb-2 px-4 px-right d-inline-block"><i className="fa fa-phone" aria-hidden="true"></i></a>
                    <a href={d.linkedin} className="pb-2 d-inline-block"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  </div>
                  {d.content && d.content.length > 0 && <a className="ps-4 pe-4 px-4" href="#" onClick={(e) => { e.preventDefault(); setShowPopup(1); console.log(key); slide.current.slickGoTo(key); }}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></a>}
                </div>
              </div>
            })}
          </Slider>
        </div>
        <div className="pt-5">
          {showAll === 0 ? <button className="bt-big" role="button" onClick={() => { setShowAll(1) }}>All People</button> : ""}
        </div>
      </div>

      <div className={showPopup === 1 ? "modal fade show peopleModal" : "modal fade "} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setShowPopup(0) }}></button>
            <div className="modal-body">
              <div className="container-fluid">
                <Slider {...popupSettings} ref={slide} className="testimonial-slider contact-slider">
                  {props.data.map((d, key) => {
                    return <div key={key}><div className="row">
                      <div className="col-lg-4 mb-4">
                        <div className="imgholder">
                          <img className="img-fluid" style={{ width: "100%" }} src={d.img?.mediaItemUrl} alt={d.img?.altTxt} />
                        </div>
                      </div>
                      <div className="col-lg-8 detail">
                        <h4>{d.title}</h4>
                        <h5>{d.subtitle}</h5>
                        <p>{d.certification}</p>
                        <p  dangerouslySetInnerHTML={{ __html: d.text }}></p>
                        <div className="modalpara" dangerouslySetInnerHTML={{ __html: d.content }} />
                        <div>
                          <a href={"mailto:" + d.email} className="pb-2 px-4 d-inline-block"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                          <a href={"tel:" + d.phone} className="pb-2 px-right d-inline-block"><i className="fa fa-phone" aria-hidden="true"></i></a>
                          <a href={d.linkedin} className="pb-2 d-inline-block"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                        <a onClick={(e) => { e.preventDefault(); setShowPopup(0); document.getElementById('get-in-touch').scrollIntoView() }} href="#get-in-touch">Get in touch <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                      </div>
                    </div></div>
                  })}
                </Slider>
              </div>
            </div>
            <div className="mfooter d-flex">
              <a href="#" onClick={(e) => { e.preventDefault(); slide.current.slickPrev() }}><i className="fa fa-chevron-left" aria-hidden="true"></i> Previous bio</a>
              <a href="#" className="ms-auto" onClick={(e) => { e.preventDefault(); slide.current.slickNext() }}>Next bio <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PeopleList
