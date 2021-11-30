import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouch from "../components/get-in-touch"
import Awards from "../components/awards"
import Container from "../components/slider/container"
import Accordian from "../components/accordian/accordian"
import Services from "../components/services/container"
import Slider from "react-slick";
import { Link } from "gatsby"
import useInView from "react-cool-inview";

const settings = {
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
};

const IndexPage = ({ data }) => {
  //console.log("Home pG Data", datadata.wpPage.hpOptions.homeSlider[2]);
  const [serviceEnter, changeServiceEnter] = React.useState('')
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25, // Default is 0
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('serviceIn')
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('')
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });
  return (
    <div className="home">
      <Layout>
        <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
        <section className="banners">
          <Slider {...settings} className="home-slider">
            <div className="banner-slider">
              <div className="bannerslider-second first">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <h1 className="banner-heading">{data.wpPage.hpOptions.homeSlider[0].bannerTitle}</h1>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-4">
                      <div className="slider-content d-none d-sm-none d-md-none d-lg-block">
                        <h1 className="banner-heading">{data.wpPage.hpOptions.homeSlider[0].bannerTitle}</h1>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[0].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[0].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper">
                        <img className="img-fluid" src={data.wpPage.hpOptions.homeSlider[0].bannerImage.mediaItemUrl} alt={data.wpPage.hpOptions.homeSlider[0].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details ">{data.wpPage.hpOptions.homeSlider[0].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[0].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[0].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-slider">
              <div className="bannerslider-second second">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <h1 className="second banner-heading">{data.wpPage.hpOptions.homeSlider[1].bannerTitle}</h1>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-5 align-self-center">
                      <div className="slider-content second d-none d-sm-none d-md-none d-lg-block">
                        <h1 className="banner-heading">{data.wpPage.hpOptions.homeSlider[1].bannerTitle}</h1>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[1].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[1].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper">
                        <img className="img-fluid" src={data.wpPage.hpOptions.homeSlider[1].bannerImage.mediaItemUrl} alt={data.wpPage.hpOptions.homeSlider[1].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details ">{data.wpPage.hpOptions.homeSlider[1].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[1].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[1].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-slider">
              <div className="bannerslider-second third">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-block d-sm-block d-md-block d-lg-none">
                      <h1 className="third banner-heading">{data.wpPage.hpOptions.homeSlider[2].bannerTitle}</h1>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper thirdslide">
                        <img className="img-fluid" src={data.wpPage.hpOptions.homeSlider[2].bannerImage.mediaItemUrl} alt={data.wpPage.hpOptions.homeSlider[2].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-5 align-self-center">
                      <div className="slider-content d-none d-sm-none d-md-none d-lg-block">
                        <h1 className="banner-heading">{data.wpPage.hpOptions.homeSlider[2].bannerTitle}</h1>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[2].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[2].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details">{data.wpPage.hpOptions.homeSlider[2].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[2].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[2].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-slider">
              <div className="bannerslider-second third">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <h1 className="third banner-heading">{data.wpPage.hpOptions.homeSlider[3].bannerTitle}</h1>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-7">
                      <div className="banner-img-wrapper thirdslide">
                        <img className="img-fluid" src={data.wpPage.hpOptions.homeSlider[3].bannerImage.mediaItemUrl} alt={data.wpPage.hpOptions.homeSlider[3].bannerImage.altText} />
                      </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-5 align-self-center">
                      <div className="slider-content d-none d-sm-none d-md-none d-lg-block">
                        <h1 className="banner-heading">{data.wpPage.hpOptions.homeSlider[3].bannerTitle}</h1>
                        <p className="banner-details">{data.wpPage.hpOptions.homeSlider[3].bannerSubtitle}</p>
                        {data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[3].learnMoreUrl}>Learn more</Link> : ""}
                      </div>
                    </div>
                    <div className="col-12 d-block d-sm-block d-md-block d-lg-none">
                      <p className="banner-details">{data.wpPage.hpOptions.homeSlider[3].bannerSubtitle}</p>
                      {data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== null && data.wpPage.hpOptions.homeSlider[3].learnMoreUrl !== "" ? <Link className="btn btn-primary" to={data.wpPage.hpOptions.homeSlider[3].learnMoreUrl}>Learn more</Link> : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

        </section>
        <div ref={observe} className={serviceEnter}>
          <Services
            serviceTitle={data.wpPage.hpOptions.serviceTitle}
            data={data.wpPage.hpOptions.services}
          />
        </div>
        <Accordian
          title={data.wpPage.hpOptions.whyMgTitle}
          showEnquireButton={false}
          data={data.wpPage.hpOptions.whyMgPoints}
          bgColor={'#1C5E48'}
          textColor={'#EBE9DE'}
          textHoverColor={"#DBFD90"}
        />
        <Container
          title={data.wpPage.hpOptions.testimonialTitle}
          data={data.wpPage.hpOptions.testimonials}
          slideColor={'#EBE9DE'}
        />
        <Awards
          title={data.wpPage.hpOptions.awardTitle}
          data={data.wpPage.hpOptions.awardPoints}
        />
        <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
      </Layout>
    </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Home"}) {
      hpOptions {
        homeSlider {
          bannerSubtitle
          bannerTitle
          fieldGroupName
          learnMoreUrl
          bannerImage {
            altText
            mediaItemUrl
          }
        }
        serviceTitle
        services {
          fieldGroupName
          serviceDecription
          servicePageUrl
          serviceTitle
          serviceImage {
            mediaItemUrl
            altText
          }
        }
        testimonials {
          comment
          designation
          fieldGroupName
          name
          url
          image {
            altText
            mediaItemUrl
          }
        }
        whyMgPoints {
          description
          fieldGroupName
          title
        }
        awardTitle
        awardPoints {
          fieldGroupName
          pointDesc
        }
        testimonialTitle
        whyMgTitle
      }
      metaFields {
        metaDescription
        metaTitle
      }
    }
    allWp {
      nodes {
        themeGeneralSettings {
          themeGeneralSettings {
            copyrightText
            expertAdviceLink
            expertAdviceTitle
            fieldGroupName
            getInTouchDescription
            getInTouchTitle
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`

export default IndexPage
