import * as React from "react"
import { Link } from "gatsby"

const topBanner = (props) => (
	<section id="banner-section">
		{/* <div className="container position-relative">
	{typeof props.breadCrumbs !== "undefined"?<nav aria-label="breadcrumb" className="breadcrumbs">
		<ol className="breadcrumb">
			{props.breadCrumbs.map((bc) => (bc.link?<li className="breadcrumb-item"><Link to={bc.link}>{bc.title}</Link></li>:<li className="breadcrumb-item active" aria-current="page">{bc.title}</li>))}
		</ol>
	</nav> : ""}
		<div className="row">
			<div className="col-sm-12 col-md-12 col-lg-4">
				<div className="banner-content innerpage-banner">
					<h1 className="banner-heading">{props.title}</h1>
					<h2 className="banner-subheading">{props.subtitle}</h2>
					<p className="banner-desc d-none d-sm-none d-md-none d-lg-block">{props.text}</p>
					{props.btn !== false ? <button className="btn btn-primary d-none d-sm-none d-md-none d-lg-block">Learn more</button>:""}
				</div>
			</div>
			<div className="col-sm-12 col-md-12 col-lg-7">
				<div className="banner-image">
					<img src={props.bannerImg.mediaItemUrl} className="img-fluid" alt={props.bannerImg.altText} />
				</div> 
			</div>
			<div className="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
	            <p className="banner-desc">{props.text}</p>
				{props.btn !== false ? <button className="btn btn-primary">Learn more</button>:""}
	        </div>
		</div>
	</div> */}
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-4">
					<h2>{props.title}</h2>
				</div>
				<div className="col-sm-12 col-md-8">
					{typeof props.breadCrumbs !== "undefined" ? <nav aria-label="breadcrumb" className="breadcrumbs text-end position-relative top-0 end-0">
						<ol className="breadcrumb text-end float-end me-4">
							{props.breadCrumbs.map((bc) => (bc.link ? <li className="breadcrumb-item"><Link to={bc.link}>{bc.title}</Link></li> : <li className="breadcrumb-item active" aria-current="page">{bc.title}</li>))}
						</ol>
					</nav> : ""}
				</div>
			</div>
			<div className="row">
				<div className="image-section">
					<div className="col-sm-12 cardCustom">
						<div className="about-image">
							<img src={props.bannerImg.mediaItemUrl} style={{ height: "100%", width: "100%" }} alt={props.bannerImg.altText} className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)
export default topBanner