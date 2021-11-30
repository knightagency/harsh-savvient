import * as React from "react"
import { Link } from "gatsby"

const ReciveryPlan = (props) => (
  <section className={"recovery-plan"}>
    <div className="container">
    {props.titleDisplay !== false && <div className="row">
        <div className="col-12">
          <h2 className="title text-center">Your 4-step recovery plan</h2>
          <p className="subDesc">Here’s how we work with you to meet your unique needs. The sooner we get started, the better your chances of success.</p>
        </div>
      </div>}
      <div className="row text-center steps">
        {props.data.map((d, i) => {
          return (<div className={"stepsCol col-md-12 col-lg-" + Math.floor(12 / props.data.length)}>
            <div className="numContainer position-relative"><span className="num">{i + 1}</span></div>
            <div className="subTxt">{d.title || d.processTitle}</div>
            <p>{d.description}</p>
          </div>)
        })}
      </div>
    </div>
  </section>

)

export default ReciveryPlan
