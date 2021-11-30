import * as React from "react"

const Awards = (props) => (
  <section id="awards">
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>{props.title}</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2 offset-sm-0 col-sm-12">
        <ul>
          {props.data.map((d, key) => {
            return <li key={key}>{d.pointDesc}</li>
          })}
        </ul>
      </div>
    </div>
  </div>
</section>
  )

export default Awards
