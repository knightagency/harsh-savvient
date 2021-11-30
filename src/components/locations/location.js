import * as React from "react"
import { Link } from "gatsby"
import NewsList from "./list"

const News = (props) => (
  <section className="news-articles" id="news-articles">
    <NewsList data={props.data} title={props.title} />
  </section> 
)
export default News
