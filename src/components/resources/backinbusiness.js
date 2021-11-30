import * as React from "react"
import BusinessList from "./list"
import { Link } from "gatsby"
const BackInBusiness = (props) => (
  <section className="backinbusiness" id="backinbusiness">
    <div className="container">
      <h2 className="my-5">{props.title}</h2>
      <div className="row">
        {props.data.map((d) => {
          return <BusinessList
            data={d}
          />
        })}
      </div>
    </div>
  </section>
)

export default BackInBusiness
