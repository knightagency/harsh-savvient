import * as React from "react"

const Career = (props) => (
  <section id="careers">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8 image-container">
          <img className={"img-fluid img-fullwidth"} src={props.image} alt={props.altText} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 align-items-center content-container">
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: props.text }} />
            <a className="btn btn-primary" href={props.buttonLink}>Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Career