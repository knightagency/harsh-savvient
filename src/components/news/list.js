import * as React from "react"
import { Link } from "gatsby"

const NewsList = (props) => (
  <section className="news-list">
    <div className="container">
      <div className="row">
        {props.data.map((d, index) => { return index === 0 ? "" : <div className="col-lg-4 col-md-12  mt-4">
          <div className="listbg">
            <img className="img-fluid" style={{objectFit: "cover"}} src={d.featuredImage?.node?.mediaItemUrl} alt={d.featuredImage?.node?.altText} />
            <h4 className="px-4"  style={{minHeight: "150px"}}>{d.title}</h4>
            <div className="pt-4 px-4 news-desc" dangerouslySetInnerHTML={{__html:d.excerpt}}></div>
            <Link className="ps-4 pe-4 px-4" to={"/insights/"+d.slug+"/"}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
          </div>
        </div> })}
      </div>
      {props.btn !== false ? <div className="pt-5">
        <Link className="bt-big" to="/news/" role="button">All News &amp; Articles</Link>
      </div> : ""}
    </div>
  </section>  
)

export default NewsList
