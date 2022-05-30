import * as React from "react"
import AccordianSlide from "./accordian-slide"

const Accordian = (props) => {
  const isBrowser = typeof window !== "undefined"
  const [sheight,setHeight] = React.useState(isBrowser?window.scrollY:0);

  React.useEffect(() => {
    

  }, []);


  return <section id="why-mg" className={props?.isPage=='dpn'?'dpnfaq':''}>
    <div className="container">
      {props.title && props.title !== '' ? <div className="row">
        <div className="col">
          <h2>{props.title}</h2>
        </div>
      </div> : ""}
      <div className="row">
        <div className="col">
          <div className="accordion" id="accordionExample">
            {props.data.map((d, key) => {
              return <AccordianSlide
                showEnquireButton={props.showEnquireButton}
                learnMoreText={d.learnMoreText}
                learnMoreUrl={d.learnMoreUrl}
                title={d.title}
                text={d.description}
                tag={d.tag}
                keyloc={props?.isPage?props.isPage+key:key}
                key={props?.isPage?props.isPage+key:key}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Accordian
