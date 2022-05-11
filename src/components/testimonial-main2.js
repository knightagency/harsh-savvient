import * as React from "react"
import { Link } from "gatsby"

const TestimonialMain = (props) => {
  const isBrowser = typeof window !== "undefined"
  const [sheight,setHeight] = React.useState(isBrowser?window.scrollY:0);
  React.useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setHeight(scrollPosition);console.log(scrollPosition)
      if(document.getElementsByClassName("why-mg-fixed").length && (window.outerWidth<=991)){
        if(window.outerWidth<430){
          document.getElementsByClassName("why-mg-fixed")[0].style.top = 96+document.getElementsByClassName("slider_fix")[0].offsetHeight+'px';
        } else {
          document.getElementsByClassName("why-mg-fixed")[0].style.top = 91+document.getElementsByClassName("slider_fix")[0].offsetHeight+'px';
        }
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };



  }, []);
  return <section className={sheight>2100 && sheight<5617?'testimonial-main why-mg-fixed':'testimonial-main'}>
    <div className="container">
        {props.data.map((d, i) => {
          return (<div className={i%2 !== 0 ? "row flex-row-reverse" : "row"}>
          <div className="col-sm-12 col-md-12 col-lg-6 p-5">
            <img className="img-fluid" src={d.testImage?.mediaItemUrl} alt={d.testImage?.altText} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 p-5 desc">
            <p>{d.testDescription}</p>
          </div>
        </div>)
        })}
    </div>
  </section>

}

export default TestimonialMain
