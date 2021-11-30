import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import News from "../components/news/news"
import BackInBusiness from "../components/backinbusiness/backinbusiness"
import Events from "../components/events/events"
import GetInTouch from "../components/get-in-touch"
import Career from "../components/career"
const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "Insights" },
]

const Insights = ({ data }) => {
  setTimeout(() => {
    if (typeof window !== "undefined" && window.location.hash !== "") {
      document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
    }
  }, 100)
  return (
    <div className="service insights">
      <Layout>
        <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
        <TopBanner
          title={data.wpPage.insightPageOptions.bannerTitle}
          subtitle={data.wpPage.insightPageOptions.bannerSubtitle}
          text={data.wpPage.insightPageOptions.bannerDesc}
          bannerImg={data.wpPage.insightPageOptions.bannerImage}
          breadCrumbs={breadCrumbs}
          sendUrl={data.wpPage.insightPageOptions.sendUrl}
        />
        <News
          title={data.wpPage.insightPageOptions.newsTitle}
          data={data.allWpArticle.nodes}
        />
        <BackInBusiness
          title={data.wpPage.insightPageOptions.businessTitle}
          data={data.allWpBusiness.nodes}
        />
        <Career
          title={data.wpPage.insightPageOptions.dealContentTitle}
          text={data.wpPage.insightPageOptions.dealContentDesc}
          buttonLink={data.wpPage.insightPageOptions.dealButtonLink}
          image={data.wpPage.insightPageOptions.dealImage?.mediaItemUrl}
          altText={data.wpPage.insightPageOptions.dealImage?.altText}
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
    wpPage(title: {eq: "Insights"}) {
      insightPageOptions {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerTitle
        businessButtonUrl
        businessTitle
        eventsButtonUrl
        eventsTitle
        fieldGroupName
        newsButtonUrl
        newsTitle
        sendUrl
        dealButtonLink
        dealContentDesc
        dealContentTitle
        dealTitle
        dealImage {
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
    allWpArticle(limit: 4, sort: {order: DESC, fields: date}) {
      nodes {
        title
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        excerpt
        content
        slug
      }
    }
    allWpBusiness(limit: 4, sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        content
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
    allWpEvent(limit: 4, sort: {order: DESC, fields: date}) {
      nodes {
        title
        excerpt
        content
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        eventsOption {
          eventDate
          buttonLabel
          registerUrl
        }
      }
    }
  }
`

export default Insights
