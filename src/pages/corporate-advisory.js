import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import CurveLeft from "../components/curve-left"
import GetInTouch from "../components/get-in-touch"
import Accordian from "../components/accordian/accordian"
import CapabilityForm from "../components/capability-form"
import CapabilityFormNew from "../components/capability-form-new"
import FullText from "../components/full-text"
import { formDetailContext } from '../components/context';

const Corporate = ({ data }) => {
  let whyMG = [];
  data.wpPage.corporateAdvisoryPageOptions.qA.map((d) => {
    return whyMG.push({ title: d.question, description: d.answer });
  })
  const breadCrumbs = [
    { link: "/", title: "Home" },
    { link: "#", title: "Services" },
    { title: "Corporate Advisory" },
  ]
  // const formDetailContext = React.createContext(null);
  const [fromDetails, setFormDetails] = React.useState(0);
  const value = { fromDetails, setFormDetails };
  return (<div className=" service corporate-advisory">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.corporateAdvisoryPageOptions.bannerTitle}
        subtitle={data.wpPage.corporateAdvisoryPageOptions.bannerSubtitle}
        text={data.wpPage.corporateAdvisoryPageOptions.bannerDesc}
        bannerImg={data.wpPage.corporateAdvisoryPageOptions.bannerImage}
        sendUrl={data.wpPage.corporateAdvisoryPageOptions.sendUrl}
        breadCrumbs={breadCrumbs}
      />
      <FullText
        text={data.wpPage.corporateAdvisoryPageOptions.pageTagline}
      />
      <Accordian
        title={''}
        showEnquireButton={true}
        data={whyMG}
      />

      <section class="sec_links">
      <div class="container position-relative">
       <div class="row">
         <div class="col-sm-12">
          <ul class="d-flex justify-content-center">
            <li>
             <Link to="#capability">Capability Statement</Link> 
            </li>
            <li>
             <Link to="#financial">New Financial Year Guide</Link> 
            </li>
              <li>
               <Link to="#vCFO">Virtual Chief Financial Officer (vCFO)</Link> 
            </li>
          </ul>
          </div>
          </div>
        </div>
    </section>

    <a id="capability"></a>
      <formDetailContext.Provider value={value}>
        <CurveLeft
          title={data.wpPage.corporateAdvisoryPageOptions?.croTitle}
          text={data.wpPage.corporateAdvisoryPageOptions?.croDesc}
          img={data.wpPage.corporateAdvisoryPageOptions?.officerimage}
          btnTxt={'Download Now'}
          btnLink={""}
          btnClick={() => { setFormDetails(1) }}
        />
        <CapabilityForm
          title={'Download Capability Statement'}
          text={'Download your free copy today and get on the path to recovery'}
        />
      </formDetailContext.Provider>
      <a id="financial"></a>
      <formDetailContext.Provider value={value}>
        <CurveLeft
          title={data.wpPage.corporateAdvisoryPageOptions?.newFinancialTitle}
          text={data.wpPage.corporateAdvisoryPageOptions?.newFinancialDesc}
          img={data.wpPage.corporateAdvisoryPageOptions?.newFinancialImage}
          btnTxt={'Download Now'}
          btnLink={""}
          btnClick={() => { setFormDetails(1) }}
        />
        <CapabilityFormNew
          title={'Download New Financial Year Guide'}
          text={'Download your free copy today and get on the path to recovery'}
        />
      </formDetailContext.Provider>

      <CurveLeft
        id={'vCFO'}
        title={data.wpPage.corporateAdvisoryPageOptions.cfoTitle}
        text={data.wpPage.corporateAdvisoryPageOptions.cfoDesc}
        img={data.wpPage.corporateAdvisoryPageOptions.cfoImage}
        btnTxt={'Enquire'}
        btnLink={data.wpPage.corporateAdvisoryPageOptions.cfoEnquireLink}
      />
      <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />
    </Layout>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "Corporate Advisory"}) {
      corporateAdvisoryPageOptions {
        croDesc
        officerimage {
          altText
          mediaItemUrl
        }
        croTitle
        enquireLink
        bannerDesc
        bannerImage {
          altText
          mediaItemUrl
        }
        newFinancialTitle
        newFinancialDesc
        newFinancialImage {
          altText
          mediaItemUrl
        }
        newFinancialEnquireLink
        bannerSubtitle
        bannerTitle
        fieldGroupName
        pageTagline
        qA {
          answer
          question
        }
        sendUrl
        cfoTitle
        cfoDesc
        cfoImage {
          altText
          mediaItemUrl
        }
        cfoEnquireLink
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
