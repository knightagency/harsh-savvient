import * as React from "react"
import { Link } from "gatsby"
const AccordianSlide = (props) => (
  <div className="accordion-item" key={props.keyloc}>
    <h3 className="accordion-header" id={"heading" + props.keyloc}>
      <button
        className="accordion-button collapsed"
        type="button" data-bs-toggle="collapse"
        data-bs-target={"#collapse" + props.keyloc}
        aria-expanded="false"
        aria-controls={"collapse" + props.keyloc}
        onMouseOver={(thisa) => { thisa.target.style.color = props.textHoverColor }}
        onMouseOut={(thisa) => { !thisa.target.classList.contains('collapsed') ? thisa.target.style.color = props.textHoverColor : thisa.target.style.color = props.textColor }}
        onClick={(thisa) => { const col = thisa.target.classList.contains('collapsed') ? props.textColor : props.textHoverColor; thisa.target.style.color = col }}
      >
        {props.title} <sup>{props.tag && props.tag !== null ? props.tag : ""}</sup>
      </button>
    </h3>
    <div id={"collapse" + props.keyloc} className="accordion-collapse collapse hide" aria-labelledby={"heading" + props.keyloc} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div dangerouslySetInnerHTML={{ __html: props.text }}></div>
        {props.showEnquireButton == true ? <Link className="btn btn-primary" to={props.learnMoreUrl != null ? props.learnMoreUrl : "#get-in-touch"}>{props.learnMoreText != null ? props.learnMoreText : 'Enquire'}</Link> : ""}
      </div>
    </div>
  </div>
)

export default AccordianSlide
