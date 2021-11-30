import * as React from "react"
import { Link } from "gatsby"
import NewsList from "./list"

const News = (props) => (
  <section className="news-articles" id="news-articles">
    <div className="container">
      <div className="row">
        <h2 className="my-5">{props.title}</h2>
        <div className="col-lg-7 col-md-7 p-0">
          <img className="img-fluid" style={{ width: "100%" }} src={props.data[0].featuredImage?.node?.mediaItemUrl} alt={props.data[0].featuredImage?.node?.altText} />
        </div>
        <div className="col-lg-5 col-md-5 ps-4" style={{ paddingBottom: "100px", background: "#E0E3E5" }} >
          <h4>{props.data[0].title}</h4>
          <div dangerouslySetInnerHTML={{ __html: props.data[0].excerpt }}></div>
          <Link to={"/insights/" + props.data[0].slug + "/"}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>
    <NewsList data={props.data} />
  </section>
)
export default News
