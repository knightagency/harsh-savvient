import * as React from "react"
import PeopleList from "./list"

const OurPeople = (props) => (
  <section className="news-articles" id="people">
    <div className="container">
      <div className="row">
        <h2 className="my-3">{props.title}</h2>
        <div className="col-md-9 col-sm-12 fullTxt">
          {props.text}
        </div>
      </div>
    </div>
    <PeopleList data={props.data} />
  </section> 
)

export default OurPeople
