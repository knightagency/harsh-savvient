import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch"
import OurPeople from "../components/our-people-list/our-people"
import AboutUs from "../components/about-us"
import History from "../components/history"
import Career from "../components/career"
import Accordian from "../components/accordian/accordian"
import { Link } from "gatsby"
import CurveLeft from "../components/curve-left"
import { element } from "prop-types"
// const newsData = [
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "How will a business health check change the direction of your business?",
//     "text":"If you’re in survival mode right now, you’re not alone. Thousands of Australian businesses are being tested by the fallout from COVID-19. But no business director can afford to neglect ..."
//   },
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "Struggling Tourism Operators To Seek Help Before JobKeeper Ends",
//     "text":"One of Australia’s leading restructuring advisers, Mackay Goodwin, is urging struggling travel and tourism operators to urgently seek financial advice before the Government winds back JobKeeper payments at the end ..."
//   },
//   {
//     "imgSrc":"/images/news.jpeg",
//     "title": "Why you need a budget for your business?",
//     "text":"You need a budget for your business. It doesn’t actually matter what size your business is – whether it’s a sole proprietor right through to a large corporation, if you’re ..."
//   },
// ]

// const whyMG = [
//   {
//     "title": "Innovation",
//     "text": "We’re in the business of resolution. Backed by leading technology and innovative thinking, we make the right decisions at the right time. Capturing opportunity and avoiding obstacles. Delivering the best possible outcome, every day."
//   },
//   {
//     "title": "Focus",
//     "text": "To achieve success takes determination and focus. We leave no stone unturned. Tailoring solutions to meet your specific needs, on top of every moment. Getting you where you need to be, step by step."
//   },
//   {
//     "title": "Action-orientated",
//     "text": "We know time is of the essence. So we put positive action into practice. Taking the initiative, we anticipate your needs and move ahead as swiftly as possible, all without missing a trick."
//   },
//   {
//     "title": "Understanding",
//     "text": "We see beyond the facts and figures, always mindful of the emotional and financial weight. We’ll guide you through with understanding and transparency. With us, you’ll always know where you stand."
//   }
// ]

// const businessData = [
//   {
//     "title": "Dominic Calabretta",
//     "subtitle": "Chief Executive",
//     "text": "Registered Liquidator by ASIC Sydney"
//   },
//   {
//     "title": "Kate Concannon",
//     "subtitle": "Chief Experience Officer",
//     "text": "Sydney"
//   },
//   {
//     "title": "Andrew Ngo",
//     "subtitle": "Director",
//     "text": "Sydney"
//   },
//   {
//     "title": "Laurentia Evelina",
//     "subtitle": "Senior Analyst",
//     "text": "Sydney"
//   },
//   {
//     "title": "Grahame Ward",
//     "subtitle": "Director",
//     "text": "Registered Liquidator by ASIC Sydney"
//   },
//   {
//     "title": "Lili Safa",
//     "subtitle": "Supervisor",
//     "text": "Sydney"
//   }
// ]

const MgWay = ({ data }) => {
  let whyMG = [];
  data.wpPage.mgWayPageOptions.approachQA.map((d) => {
    console.log(d);
    return whyMG.push({ title: d.question, description: d.answer, tag: d.approachtag });
  })
  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "The MG Way" },
  ]
  var t = setInterval(() => {
    if (typeof window !== "undefined" && window.location.hash !== "") {
      const element = document.getElementById(window.location.hash.replace("#", ""));
      if (typeof (element) != 'undefined' && element != null) {
        setTimeout(() => {
          document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
          clearInterval(t);
        }, 600)
      }
    }
  }, 500)
  return (<div className="mgway">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.mgWayPageOptions.bannerTitle}
        subtitle={data.wpPage.mgWayPageOptions.bannerSubtitle}
        text={data.wpPage.mgWayPageOptions.bannerDesc}
        bannerImg={data.wpPage.mgWayPageOptions.bannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.mgWayPageOptions.learnMoreUrl}
      />
      <OurPeople
        title={data.wpPage.mgWayPageOptions.peopleTitle}
        text={data.wpPage.mgWayPageOptions.peopleTagline}
        data={businessData}
        showAll={0}
      />
      <AboutUs
        title={data.wpPage.mgWayPageOptions.aboutTitle}
        subtitle={data.wpPage.mgWayPageOptions.contentTitle}
        text={data.wpPage.mgWayPageOptions.contentDesc}
        tagline={data.wpPage.mgWayPageOptions.contentTagline}
        aboutImage={data.wpPage.mgWayPageOptions?.aboutImage}
      />
      <Accordian
        title={data.wpPage.mgWayPageOptions.approachTitle}
        showEnquireButton={false}
        data={whyMG}
      />
      <CurveLeft
        title={data.wpPage.mgWayPageOptions.identifixTitle}
        tag={data.wpPage.mgWayPageOptions.identifixTag}
        text={data.wpPage.mgWayPageOptions.identifixDescription}
        img={data.wpPage.mgWayPageOptions.identifixImage}
        btnTxt={'Enquire Now'}
        btnLink={data.wpPage.mgWayPageOptions.enquireLink}
      />
      <History
        title={data.wpPage.mgWayPageOptions.historyTitle}
        subtitle={data.wpPage.mgWayPageOptions.historyContentTitle}
        text={data.wpPage.mgWayPageOptions.historyContentDesc}
        tagline={data.wpPage.mgWayPageOptions.historyContentTagline}
        historyImage={data.wpPage.mgWayPageOptions.historyImage}
      />
      <Career
        title={data.wpPage.mgWayPageOptions.carrerTitle}
        text={data.wpPage.mgWayPageOptions.careerContentDesc}
        buttonLink={data.wpPage.mgWayPageOptions.careerButtonLink}
        image={data.wpPage.mgWayPageOptions.careerImage?.mediaItemUrl}
        altText={data.wpPage.mgWayPageOptions.careerImage.altText}
      />
      <section id="community-support" className="community">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>{data.wpPage.mgWayPageOptions.communityTitle}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8 image-container">
              <img className={"img-fluid img-fullwidth"} src={data.wpPage.mgWayPageOptions.communityImage.mediaItemUrl} alt={data.wpPage.mgWayPageOptions.communityImage.altText} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 align-items-center content-container">
              <div className="card-body">
                <h3 className="card-title">{data.wpPage.mgWayPageOptions.communityContentTitle}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.wpPage.mgWayPageOptions.communityContentDesc }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project8">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>{data.wpPage.mgWayPageOptions.journeyTitle}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-8 image-container">
              <img className={"img-fluid img-fullwidth"} src={data.wpPage.mgWayPageOptions.journeyImage.mediaItemUrl} alt={data.wpPage.mgWayPageOptions.journeyImage.altText} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 align-items-center content-container">
              <div className="card-body">
                <h3 className="card-title">{data.wpPage.mgWayPageOptions.journeyContentTitle}</h3>
                <div className="pb-4" dangerouslySetInnerHTML={{ __html: data.wpPage.mgWayPageOptions.journeyContentDesc }} />
                {data.wpPage.mgWayPageOptions.journeyButtonLink !== "" ? <Link className="btn btn-primary" to={data.wpPage.mgWayPageOptions.journeyButtonLink}>Read More <i className="fa fa-chevron-right" aria-hidden="true"></i></Link> : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
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
    wpPage(title: {eq: "The MG Way"}) {
      mgWayPageOptions {
        aboutImage {
          altText
          mediaItemUrl
        }
        aboutTitle
        allPeopleUrl
        approachQA {
          answer
          question
          approachtag
        }
        approachTitle
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerTitle
        careerButtonLink
        careerContentDesc
        careerContentTitle
        careerImage {
          altText
          mediaItemUrl
        }
        carrerTitle
        communityContentDesc
        communityContentTitle
        communityImage {
          altText
          mediaItemUrl
        }
        communityTitle
        contentDesc
        contentTagline
        contentTitle
        identifixTag
        identifixTitle
        identifixDescription
        identifixImage {
        altText
        mediaItemUrl
        }
        enquireLink
        historyContentDesc
        historyContentTagline
        historyContentTitle
        historyImage {
          altText
          mediaItemUrl
        }
        historyTitle
        learnMoreUrl
        peopleTagline
        peopleTitle
        journeyButtonLink
        journeyContentDesc
        journeyContentTitle
        journeyTitle
        journeyImage {
          altText
          mediaItemUrl
        }
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
    allWpOurpeople(sort: {order:  ASC, fields: menuOrder}) {
      nodes {
        title
        backInBusiness {
          designation
          location
          certification
          designationType
          linkedin
          email
        }
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        content
      }
    }
  }
`

export default MgWay
