import * as React from "react"
import { Link } from "gatsby"

const CurveLeft = (props) => (
  <section id={props.id !== '' ? props.id : ''} className="banners curve-left">
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-md-10 col-lg-10 offset-sm-1 offset-md-1 offset-lg-1">
          <div className="image-warpper">
            {props.imagevideo  && props.imagevideo === 'Video' ?<video className="img-fluid videoTxt" controls><source src={props.video?.mediaItemUrl} /></video>:<img className="img-fluid" src={props.img?.mediaItemUrl} alt={props.img?.altText} />}
          </div>
          <div className="ins-content2">
            <h2 className="ins-banner-heading2">{props.title}{props.tag != null && props.tag != '' ? <sup> {props.tag} </sup> : ''}</h2>
            <div className="ins-banner-details2" dangerouslySetInnerHTML={{ __html: props.text }}></div>
            {props.btnLink !== null && props.btnLink !== "" ? <Link className="btn btn-primary me-5" to={props.btnLink}>{props.btnTxt}</Link> : ""}
            {typeof props.btnClick !== "undefined" && props.btnClick !== null && props.btnClick !== "" ? <button className="btn btn-primary me-5" onClick={props.btnClick}>{props.btnTxt}</button> : ""}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CurveLeft
