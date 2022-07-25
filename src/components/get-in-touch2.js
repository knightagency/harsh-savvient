import * as React from "react"
import GetInTouchForm from "./get-in-touch-form2";

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const GetInTouch = (props) => {
  return (
  <section id="get-in-touch">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className={typeof props.fullWidth !=="undefined" && props.fullWidth?"col-12" :"col-md-8 offset-md-2 offset-sm-0 col-sm-12"}>
          <h3 dangerouslySetInnerHTML={{__html:props.text}}></h3>
          <GetInTouchForm />
        </div>
      </div>
    </div>
  </section>
  )
}
export default GetInTouch
