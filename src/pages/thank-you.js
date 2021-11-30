import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import TestimonialMain from "../components/testimonial-main"
import BackInBusiness from "../components/resources/backinbusiness"
import Events from "../components/events/events"
import FullText from "../components/full-text"
import Container from "../components/slider/container"

const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "Thank You" },
]

const Thankyou = ({ data }) => {
  setTimeout(() => {
    if (typeof window !== "undefined" && window.location.hash !== "") {
      document.getElementById(window.location.hash.replace("#", "")).scrollIntoView();
    }
  }, 100)
  return (
    <div className="service insights thankyou">
      <Layout>
        <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
        <TopBanner
          title={data.wpPage.thankYou.bannerTitle}
          subtitle={data.wpPage.thankYou.bannerSubtitle}
          text={''}
          bannerImg={data.wpPage.thankYou.bannerImage}
          breadCrumbs={breadCrumbs}
          btnTxt={data.wpPage.thankYou.meetExpertLabel}
          sendUrl={data.wpPage.thankYou.meetExpertUrl}
        />
        <TestimonialMain
          data={data.wpPage.thankYou.testimonialThanks}
        />
        <Container
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.testimonialTitle}
          data={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.testimonials}
          slideColor={'#EBE9DE'}
        />
        <BackInBusiness
          title={data.wpPage.thankYou.resourceTitle}
          data={data.wpPage.thankYou.resources}
        />
        <Events
          title={'Events and webinars'}
          data={data.allWpEvent.nodes}
          limit={3}
          btn={true}
        />
        <FullText
          text={data.wpPage.thankYou.title}
          subTxt={data.wpPage.thankYou.subtitle}
          btn={true}
          btnUrl={data.wpPage.thankYou.buttonUrl}
          btnTxt={data.wpPage.thankYou.buttonLabel}
        />
        {/* <Container
          title={data.wpPage.hpOptions.testimonialTitle}
          data={data.wpPage.hpOptions.testimonials}
          slideColor={'#EBE9DE'}
        /> */}
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    wpPage(title: {eq: "Thank you"}) {
      thankYou {
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerSubtitle
        bannerTitle
        meetExpertLabel
        meetExpertUrl
        resourceTitle
        buttonUrl
        buttonLabel
        resources {
          buttonLabel
          buttonUrl
          description
          fieldGroupName
          title
          image {
            altText
            mediaItemUrl
          }
        }
        subtitle
        title
        testimonialThanks {
          description
          image {
            altText
            mediaItemUrl
          }
        }
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
            testimonialTitle
            testimonials {
              comment
              designation
              url
              name
              image {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    allWpEvent(sort: {order: DESC, fields: eventsOption___eventDate}) {
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
          eventStatus
        	recordingUrl {
            url
          }
        }
      }
    }
  }
`

export default Thankyou
