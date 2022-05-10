import * as React from "react"
import {useState} from "react"

const Buttons = (props) => {
  const [count, setCount] = useState(0);
  // return <div className="row justify-content-center serviceBtn">
  //   {props.buttonData.map((text, key) => {
  //   return <div className="col-sm-4 col-lg-3 col-md-4 col-xs-3" key={key}>
  //     <button className={count === key? "btn sliderBtn active":"btn sliderBtn"} id={"serviceSlidekey"+key} data-slide={key} onClick={(e)=> {props.refSlide.current.slickGoTo(key); setCount(key) }}>{text.serviceTitle}</button>
  //   </div>
  //   })}
  // </div>

  return <div className="justify-content-center serviceBtn-container">
    <ul className="service-option-container" id="service-option-container">
      {props.buttonData.map((text, key) => {
      return <li className="service-option" key={key}>
        <button className={count === key? "btn sliderBtn active":"btn sliderBtn"} id={"serviceSlidekey"+key} data-slide={key} onClick={(e)=> {props.refSlide.current.slickGoTo(key); setCount(key) }}>{text.serviceTitle}</button>
      </li>
      })}
    </ul>  
  </div>

  }

export default Buttons
