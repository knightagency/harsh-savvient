import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch"
import CurveLeft from "../components/curve-left"
import Accordian from "../components/accordian/accordian"
import FullText from "../components/full-text"
import OurPeople from "../components/our-people-liquid/our-people"
import TestimonialMain from "../components/testimonial-main"
import ReciveryPlan from "../components/recovery-plan"
import Container from "../components/slider/container"

const ConsultBusiness = ({ data }) => {
  let whyMG = [];
  let FAQs = [];

  data.wpPage.liquidation.queAnsliquidation.map((d) => {
    return whyMG.push({ title: d.ques, description: d.ans, learnMoreUrl: d.learnMoreUrl, learnMoreText: 'Contact us' });
  })

  data.wpPage.liquidation.faq.map((d) => {
    return FAQs.push({ title: d.faqTitle, description: d.faqDesc });
  })

  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType });
  })

  const breadCrumbs = [
    { link: "/", title: "Home" },
    { title: "Liquidation" },
  ]
  return (<div className="service restructure consult-business liquidation">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.liquidation.bannerTitle}
        subtitle={''}
        text={data.wpPage.liquidation.bannerDesc}
        bannerImg={data.wpPage.liquidation.bannerImage}
        breadCrumbs={breadCrumbs}
        sendUrl={data.wpPage.liquidation.sendUrl}
        equalWidth={true}
      />
      <div className="container-fluid">
        <div className="row flex-row-reverse">
          <div className="col-md-12 col-lg-6 pe-0 getintouchright">
            <GetInTouch
              title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
              text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
              fullWidth={true}
            />
          </div>
          <div className="col-md-12 col-lg-5 offset-lg-1 ps-0 pe-0 getintouchleft">
            {/* <h3>{data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.tagline}</h3> */}
            <h1 className="whyTitle">{data.wpPage.liquidation.title}</h1>
            {data.wpPage.liquidation.descriptionWhyliquid.map((d) => {
              return (
                <div className="row">
                  <div className={"col-3"}>
                    <div className="text-center">
                      <img src={d.image.mediaItemUrl} alt={d.image.altText} className="why-need-img" />
                    </div>
                  </div>
                  <div className="col-9">
                    <p className="recovery-partner-title">{d.title.trim()}</p>
                    <p className="recovery-partner-desc">{d.description.trim()}</p>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </div>
      <section className="recovery-partner">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="whyTitle text-center">{data.wpPage.liquidation.recoveryTagline}</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.liquidation.partners.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.liquidation.partners.length)}>
                <div className="text-center">
                  <img src={d.image.mediaItemUrl} alt={d.image.altText} className="recovery-partner-img" />
                </div>
                <p className="recovery-partner-title text-center"> {d.title} </p>
              </div>)
            })}
          </div>
        </div>
      </section>
      <CurveLeft
        title={data.wpPage.liquidation.businessTitle}
        tag={''}
        text={data.wpPage.liquidation.businessDesc}
        img={data.wpPage.liquidation.businessImage}
        video={data.wpPage.liquidation.businessVideo}
        imagevideo={data.wpPage.liquidation.imagevideo}
        btnTxt={'Enquire'}
        btnLink={data.wpPage.liquidation.enquire}
      />
      <FullText
        text={data.wpPage.liquidation.liquidationTypeTitle}
        subTxt={data.wpPage.liquidation.tagline}
      />
      <Accordian
        title={''}
        showEnquireButton={true}
        data={whyMG}
        className={'liquid'}
      />
      <FullText
        text={data.wpPage.liquidation.liquidationTagline}
        subTxt={data.wpPage.liquidation.liquidationDescription}
        customClass={'middleFullText'}
      />
      <ReciveryPlan
        data={data.wpPage.liquidation.process}
        titleDisplay={false}
      />
      {/* <FullText
        text={data.wpPage.liquidation.subDescription}
      /> */}
      <Accordian
        title={'FAQs'}
        showEnquireButton={true}
        data={FAQs}
        className={'faq'}
      />
      <TestimonialMain
        data={data.wpPage.liquidation.testimonialsLiquid}
      />
      <OurPeople
        title={'Our people'}
        text={'We’ve helped many business owners through tough times over the years. We’ll do the same for you, too.'}
        data={businessData}
        showAll={0}
        liquidation={1}
      />
      <Container
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.testimonialTitle}
        data={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.testimonials}
        slideColor={'#dfdfdf'}
      />
    </Layout>
  </div>
  )
}
export const query = graphql`
  {
    wpPage(title: {eq: "Liquidation"}) {
      liquidation {
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        bannerSubtitle
        bannerTitle
        businessDesc
        businessImage {
          altText
          mediaItemUrl
        }
        businessThumbnail {
          altText
          mediaItemUrl
        }
        businessTitle
        businessVideo {
          altText
          mediaItemUrl
        }
        enquire
        descriptionWhyliquid {
          description
          image {
            altText
            mediaItemUrl
          }
          title
        }
        faq {
          faqDesc
          faqTitle
        }
        imagevideo
        image {
          altText
          mediaItemUrl
        }
        learnMoreLink
        liquidationDescription
        partners {
          title
          image {
            altText
            mediaItemUrl
          }
        }
        liquidationTagline
        recoveryTagline
        sendUrl
        subDescription
        liquidationTypeTitle
        tagline
        process {
          processTitle
        }
        queAnsliquidation
         {
          ans 
          learnMoreUrl
          ques
        }
        title
        testimonialsLiquid {
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
            tagline
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
    allWpOurpeople(sort: {order:  ASC, fields: menuOrder}, filter: {backInBusiness: {registeredLiquidators: {eq: true}}}) {
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

export default ConsultBusiness
