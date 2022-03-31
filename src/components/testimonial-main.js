import * as React from "react"
import { Link } from "gatsby"

const TestimonialMain = (props) => (
  <section className={"testimonial-main"}>
    <div className="container">
        {props?.data.map((d, i) => {
          return (<div className={i%2 !== 0 ? "row flex-row-reverse" : "row"}>
          <div className="col-sm-12 col-md-12 col-lg-6 p-5">
            <img className="img-fluid" src={d.image?.mediaItemUrl} alt={d.image?.altText} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
            <p>{d.description}</p>
          </div>
        </div>)
        })}
    </div>
  </section>

)

export default TestimonialMain
