import * as React from "react"
import { Link } from "gatsby"

const BusinessList = (props) => {
  let ch = 0;
  const sendemail = (e, link) => {
    e.preventDefault();
    //creating an invisible element
    console.log(link);
    var element = document.createElement('a');
    element.setAttribute('href', link);
    element.setAttribute('download', link.replace("/",""));
    console.log("tttt");
    // Above code is equivalent to
    // <a href="path of file" download="file name">
  
    document.body.appendChild(element);
  
    //onClick property
    element.click();
    console.log("tttt");
    document.body.removeChild(element);
  }
  return (
  <div className="col-md-6 my-3">
    <div className="bbbg padding-bottom-80 position-relative">
      <img className="img-fluid" style={{objectFit: "cover", width: "100%"}} src={props.data.image?.mediaItemUrl} alt={props.data.image?.altText} />
      <h4 className="px-4 pt-5">{props.data.title}</h4>
      <div className="pt-4 px-4 col-10" style={{minHeight: "100px"}} dangerouslySetInnerHTML={{__html:props.data.description}}></div>
      <Link className="bt-big ps-4 pe-4 px-4 position-absolute downloadBtn" to={"#"} onClick={(e) => {sendemail(e, props.data.buttonUrl)}}>{props.data.buttonLabel}</Link>
    </div>
  </div>
  )
}

export default BusinessList
