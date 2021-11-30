import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch"
import OurPeople from "../components/our-people/our-people"
import AboutUs from "../components/about-us"
import History from "../components/history"
import Accordian from "../components/accordian/accordian"
import { Link } from "gatsby"
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
    return whyMG.push({ title: d.question, description: d.answer });
  })
  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "/mg-way/", title: "The MG Way" },
    { title: "People" },
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
        showAll={1}
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
