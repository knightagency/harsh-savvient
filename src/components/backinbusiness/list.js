import * as React from "react"
import { Link } from "gatsby"

const BusinessList = (props) => (
  <div className="col-md-6 my-3">
    <div className="bbbg">
      <img className="img-fluid" style={{objectFit: "cover", width: "100%"}} src={props.data.featuredImage?.node?.mediaItemUrl} alt={props.data.featuredImage?.node?.altText} />
      <h4 className="px-4 pt-5">{props.data.title}</h4>
      <div className="pt-4 px-4 col-10" style={{minHeight: "100px"}} dangerouslySetInnerHTML={{__html:props.data.excerpt}}></div>
      <Link className="ps-4 pe-4 px-4" to={"/insights/"+props.data.slug+"/"}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
    </div>
  </div>
)

export default BusinessList
