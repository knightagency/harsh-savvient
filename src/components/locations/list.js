import * as React from "react"
import { Link } from "gatsby"

const NewsList = (props) => (
  <section className="news-list">
    <div className="container">
      <div className="row">
        <h2 className="my-5">{props.title}</h2>
      </div>
      <div className="row">
        {props.data.map((d, index) => { return <div className="col-lg-4 col-md-12  mt-4">
          <div className="listbg">
            {/* <img className="img-fluid" style={{objectFit: "cover"}} src={d.featuredImage?.node?.mediaItemUrl} alt={d.featuredImage?.node?.altText} /> */}
            <div id="gcanvas">
              <iframe style={{width: "100%", height: "250px"}} id="gmap_canvas" src={"https://maps.google.com/maps?q="+ encodeURI(d.locationAddress.replace(/<\/?[^>]+>/gi, " ")).replace(/\//gi, "%2F").replace(/%0D%0A/gi, "") +"&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            <h4 className="px-4">{d.locationName}</h4>
            <div className="pt-4 px-4 news-desc" dangerouslySetInnerHTML={{__html:d.locationAddress}}></div>
            <Link className="ps-4 pe-4 px-4" to={"https://www.google.com/maps/search/"+ encodeURI(d.locationAddress.replace(/<\/?[^>]+>/gi, " ")).replace(/\//gi, "%2F").replace(/%0D%0A/gi, "")}  target="_blank">Show on google maps <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
          </div>
        </div> })}
      </div>
    </div>
  </section>  
)

export default NewsList
