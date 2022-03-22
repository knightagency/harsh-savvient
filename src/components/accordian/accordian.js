import * as React from "react"
import AccordianSlide from "./accordian-slide"

const Accordian = (props) => {
  const isBrowser = typeof window !== "undefined"
  const [sheight,setHeight] = React.useState(isBrowser?window.scrollY:0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setHeight(scrollPosition);
      if(document.getElementsByClassName("why-mg-fixed").length && (window.outerWidth<=991)){
        if(window.outerWidth<430){
          document.getElementsByClassName("why-mg-fixed")[0].style.top = 96+document.getElementsByClassName("slider_fix")[0].offsetHeight+'px';
        } else {
          document.getElementsByClassName("why-mg-fixed")[0].style.top = 162+document.getElementsByClassName("slider_fix")[0].offsetHeight+'px';
        }
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };

  }, []);


  return <section id="why-mg" className={sheight>767 && sheight<2901?props.className+' why-mg-fixed':props.className}>
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
                keyloc={key}
                key={key}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Accordian
