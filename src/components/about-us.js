import * as React from "react"

const AboutUs = (props) => (
  <section className="about-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="image-section">
          <div className="col-sm-12 cardCustom">
            <div className="about-image">
              <img src={props.aboutImage?.mediaItemUrl} style={{height:"100%", width:"100%"}} alt={props.aboutImage?.altText} className="img-fluid" />
            </div>
            <div className="section-details">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-9">
                  <h3>{props.subtitle}</h3>
                  <div dangerouslySetInnerHTML={{__html:props.text}} />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <h4>{props.tagline}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutUs