import * as React from "react"
import { Link } from "gatsby"

const FullText = (props) => (
  <section className={["fullTxtSection", props?.customClass].join(' ')}>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-11 col-md-11 col-sm-12 fullTxt" dangerouslySetInnerHTML={{__html: props.text}}></div>
        {props.subTxt !== "" && <div className="col-xl-9 col-lg-11 col-md-11 col-sm-12 fullSubTxt" dangerouslySetInnerHTML={{__html: props.subTxt}}></div>}
        {props.btn === true && <div className="pt-5">
        <Link className="bt-big" to={props.btnUrl} role="button">{props.btnTxt}</Link>
      </div>}
      </div>
    </div>
  </section>
    
)

export default FullText
