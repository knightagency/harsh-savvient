import * as React from "react"

const History = (props) => (
  <section className="about-section" id="history">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="image-section">
          <div className="col-sm-12 cardCustom">
            <div className="about-image history-image">
              <img src={props.historyImage.mediaItemUrl} style={{height:"100%", width:"100%"}} alt={props.historyImage.altText} className="img-fluid" />
            </div>
            <div className="section-details">
              <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-9 order-md-2">
                  <h3>{props.subtitle}</h3>
                  <div dangerouslySetInnerHTML={{__html:props.text}} />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 order-md-1">
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
export default History