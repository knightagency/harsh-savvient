import * as React from "react"
import { Link } from "gatsby"

const CurveRight2 = (props) => {
  const [showModal, setModal] = React.useState(false);
  return (
  <section id={props.id !== '' ? props.id : ''} className={["banners", "curve-right", props?.customClass].join(' ')} >
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-md-10 col-lg-10 offset-sm-1 offset-md-1 offset-lg-1">
          <div className="image-warpper">
            <img className="img-fluid" src={props.img?.mediaItemUrl} alt={props.img?.altText} />
          </div>
          <div className="ins-content2 ins-content222">
            <h2 className="ins-banner-heading2">{props.title}</h2>
            <div className="ins-banner-details2" dangerouslySetInnerHTML={{ __html: props.text }}></div>
            {props.btn1Link !== null && props.btn1Link !== "" ? <Link className="btn btn-primary me-3 business-button" to={props.btn1Link}>{props.btn1Txt}</Link> : ""}
            {typeof props.btn1Click !== "undefined" && props.btn1Click !== null && props.btn1Click !== "" ? <button onClick={props.btn1Click} className="btn btn-primary me-3 business-button" to={props.btn1Link}>{props.btn1Txt}</button> : ""}
            {props.btn2Link !== null && props.btn2Link !== "" ? <Link className="btn btn-primary business-button" to={props.btn2Link}>{props.btn2Txt}</Link> : ""}
            <button type="button" onClick={()=>setModal(true)} data-toggle="modal" data-target="#myModal">{props.videolabel}</button>
          </div>
        </div>
      </div>
    </div>
    <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
      <div className="model_inner">
      <div className="popup_dialog">
      <div className="modal-content">
      <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
      <div className="popup_body">
      <div className="video_ratio">
      <div dangerouslySetInnerHTML={{__html: props.video }} />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  </section >

)
}

export default CurveRight2
