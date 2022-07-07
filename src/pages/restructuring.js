import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text"
import Container from "../components/slider/container"
import CurveLeft from "../components/curve-left"
import CurveRight2 from "../components/curve-right2"
import HealthForm from "../components/health-form"
import EbookForm from "../components/ebook-form"
import { formHealthContext, formEbookContext } from '../components/context';

// breadCrumbs = [{
//   title:"Home",
//   link: "/"
// },
// {
//   title:"Services",
//   link: "/"
// }
// ]

const Restructuring = ({ data }) => {
  let whyMG = [];
  data.wpPage.restructuring.queAndAnsNew.map((d) => {
    return whyMG.push({ title: d.questionNew, description: d.answerNew });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "Business Restructure" },
  ]
  const [fromDetails, setFormDetails] = React.useState(0);
  const [fromEbookDetails, setFormEbookDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  const valueEbook = { fromEbookDetails, setFormEbookDetails };
  return (<div className="service restructure">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.restructuring.bannerTitle}
        subtitle={data.wpPage.restructuring.bannerSubtitle}
        text={data.wpPage.restructuring.bannerDesc}
        bannerImg={data.wpPage.restructuring.bannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.restructuring.sendUrl}
      />
      <FullText
        text={data.wpPage.restructuring.pageTagline}
      />
      <Accordian
        title={''}
        showEnquireButton={true}
        data={whyMG}
      />
      <Container
        title={''}
        subtitle={data.wpPage.restructuring.businessDesc}
        data={data.wpPage.restructuring.businessTestimonial}
        slideColor={'#EBE9DE'}
      />
      <CurveLeft
        id={'vCFO'}
        title={data.wpPage.restructuring.croTitle}
        text={data.wpPage.restructuring.croDesc}
        img={data.wpPage.restructuring.officerimage}
        btnTxt={'Enquire'}
        btnLink={data.wpPage.restructuring.enquireLink}
      />
      <formHealthContext.Provider value={value}>
        <CurveRight2
          id={'business-health-check'}
          title={data.wpPage.restructuring.healthCheckTitle}
          text={data.wpPage.restructuring.healthCheckDesc}
          img={data.wpPage.restructuring.healthCheckImage}
          video={data.wpPage.restructuring.video}
          videolabel={data.wpPage.restructuring.videoButtonLabel}
          btn1Txt={data.wpPage.restructuring.buttonLabel}
          btn2Txt={null}
          btn1Link={data.wpPage.restructuring.buttonUrl}
          btn2Link={''}
          //btn1Click={() => { setFormDetails(1) }}
        />
        <HealthForm
          title={'Register Now'}
          text={'Register now for your business health check'}
        />
      </formHealthContext.Provider>
      <formEbookContext.Provider value={valueEbook}>
        <CurveLeft
          title={data.wpPage.restructuring.survivalTitle}
          text={data.wpPage.restructuring.survivalDesc}
          img={data.wpPage.restructuring.survivalImage}
          btnTxt={'Download Now'}
          btnLink={""}
          btnClick={() => { setFormEbookDetails(1) }}
        />
        <EbookForm
          title={'Download e-guide'}
          text={'Download your free copy today and get on the path to recovery'}
        />
      </formEbookContext.Provider>
      <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />
      {data.wpPage.restructuring.videoButtonLabel}asdfadsf
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Restructuring"}) {
      restructuring {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerSubtitle
        bannerTitle
        businessDesc
        businessDirectorAdvisorLink
        businessDirectorButtonLink
        businessTitle
        videoButtonLabel
        video
        croDesc
        officerimage {
          altText
          mediaItemUrl
        }
        croTitle
        survivalDesc
        survivalEnquireLink
        survivalTitle
        survivalImage {
          altText
          mediaItemUrl
        }
        enquireLink
        healthCheckImage {
          altText
          mediaItemUrl
        }
        healthCheckDesc
        healthCheckTitle
        buttonLabel
        buttonUrl
        sendUrl
        businessTestimonial {
          comment
          designation
          image {
            altText
            mediaItemUrl
          }
          url
          name
        }
        pageTagline
        queAndAns {
          question
          answer
        }
        queAndAnsNew {
          questionNew
          answerNew
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
  }
`

export default Restructuring
