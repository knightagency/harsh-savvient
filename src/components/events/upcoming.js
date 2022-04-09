import * as React from "react"
import { Link } from "gatsby"
import EventsList from "./list"

const Events = (props) => {
  const dateFormatChange = (d) => {
    const t = d.split(" ");
    const t1 = t[0].split("/").reverse().join("/")
    return t1+" "+t[1];
  }
  const upcoming = props.data.filter((o1) => {
    const d1=new Date(dateFormatChange(o1.eventsOption.eventDate));
    return new Date() < d1;
  })
  const past = props.data.filter((o1) => {
    const d1=new Date(dateFormatChange(o1.eventsOption.eventDate));
    return new Date() > d1;
  })
  upcoming.sort((o1,o2)=> {
    const d1=new Date(dateFormatChange(o1.eventsOption.eventDate));
    const d2=new Date(dateFormatChange(o2.eventsOption.eventDate));
    if(d1-d2 > 0)
      return 1;
    else if(d1-d2 < 0)
      return -1;
    else
      return 0;
  })
  past.sort((o1,o2)=> {
    const d1=new Date(dateFormatChange(o1.eventsOption.eventDate));
    const d2=new Date(dateFormatChange(o2.eventsOption.eventDate));
    if(d1-d2 > 0)
      return -1;
    else if(d1-d2 < 0)
      return 1;
    else
      return 0;
  })
  let allSorted = upcoming.concat(past);
  if(props.limit && props.limit > 0)
    allSorted = allSorted.slice(0,props.limit)
  return (
  <section className="events up_events" id="events">
    <div className="container">
      <h2 className="my-5">{props.title}</h2>
      <div className="row">
        <h2> Upcoming Events </h2>
        {upcoming.map((d) => {
          return <EventsList data={d} setVideoUrl={props.setVideoUrl} />
        })}
      </div>
      {props.btn !== false ? <div className="pt-5">
        <Link className="bt-big" to="/events/" role="button">View All Events</Link>
      </div> : ""}
    </div>
  </section>
  )
}

export default Events
