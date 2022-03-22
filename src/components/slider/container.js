import * as React from "react"
import Slider from "react-slick";
import Slide from "./slide";
const settings = {
	arrows: false,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

const Container = (props) => (
	<section id="testimonials">
		<div className="container">
			<div className="row">
				<div className="col">
					<h2>{props.title}</h2>
					{typeof props.subtitle !== "undefined" && props.subtitle !== "" ? <p className="subtitle">{props.subtitle}</p> : ""}
				</div>
			</div>
			<div className="row">
				<Slider {...settings} className="testimonial-slider" key={Math.random()}>
					{props.data.map((d, key) => {
						return <Slide
							data={d}
							keyloc={key}
							slideColor={props.slideColor}
						/>
					})}
				</Slider>
			</div>
		</div>
	</section>
)

export default Container