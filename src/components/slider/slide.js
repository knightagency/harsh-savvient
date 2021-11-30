import * as React from "react"
import { Link } from "gatsby"

const Slide = (props) => (
	<div className="card mb-2 mr-2" key={props.keyloc}>
		<img className="card-img-top" src={props.data.image?.mediaItemUrl}
				alt={props.data.image?.altText} />
		<div className="card-body" style={{backgroundColor: props.slideColor}}>
			<h3 className="card-title">{props.data.name || props.data.title}</h3>
			<h4 className="card-subtitle">{props.data.designation}</h4>
			<p className="card-text">{props.data.comment}</p>
			{props.data.url !== null && props.data.url !== ""?<Link className="btn btn-primary" to={"/insights/" + props.data.url+"/"}>Learn More</Link>:""}
		</div>
	</div>
)

export default Slide