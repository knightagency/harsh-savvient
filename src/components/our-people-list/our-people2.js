import * as React from "react"
import PeopleList from "./list2"

const OurPeople = (props) => (
  <section className="news-articles ol_list" id="people">
    <div className="container">
      <div className="row">
        <h2 className="my-3">{props.title}</h2>
      </div>
    </div>
    <PeopleList data={props.data} />
  </section> 
)

export default OurPeople
