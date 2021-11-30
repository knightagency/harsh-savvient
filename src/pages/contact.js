import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouch from "../components/get-in-touch"
import TopBanner from "../components/top-banner"
import Locations from "../components/locations/location"

const Corporate = ({data}) => {
  // let whyMG = [];
  // data.wpPage.corporateAdvisoryPageOptions.qA.map((d) => {
  //   return whyMG.push({title: d.question, description: d.answer});
  // })
  const breadCrumbs = [
    {link: "/",title: "Home"},
    {title: "Contact"},
  ]
  return (<div className=" service contact">
  <Layout>
    <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
    <TopBanner
      title={data.wpPage.contactPageOptions.bannerTitle}
      subtitle={''}
      text={data.wpPage.contactPageOptions.bannerDesc}
      bannerImg={data.wpPage.contactPageOptions.bannerImage}
      sendUrl={data.wpPage.contactPageOptions.sendUrl}
      btn={false}
    />
    <Locations 
      title={data.wpPage.contactPageOptions.locationTagline}
      data={data.wpPage.contactPageOptions.locations}
    />
    {/* <FullText 
      text={data.wpPage.corporateAdvisoryPageOptions.pageTagline}
    />
    <Accordian 
      title={''}
      data={whyMG}
    /> */}
    <GetInTouch
      title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
      text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
    />
  </Layout>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "Contact"}) {
      contactPageOptions {
        bannerDesc
        bannerImage {
          mediaItemUrl
          altText
        }
        bannerTitle
        locationTagline
        fieldGroupName
        locations {
          locationAddress
          locationName
        }
        sendUrl
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

export default Corporate
