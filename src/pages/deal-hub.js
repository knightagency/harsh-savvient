import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouch from "../components/get-in-touch"

const DealHub = ({data}) => {
  return (<Layout>
    <Seo title="Deal Hub" />
    <section id="banner-section" class="identi_bannersec 123">
     <div class="container position-relative">
     <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <div class="banner-content innerpage-banner">
             <h1 class="banner-heading">{data.wpPage.aboutPageOptions.title}</h1>
              
             <div class="banner-desc d-none d-sm-none d-md-none d-lg-block">
                <div dangerouslySetInnerHTML={{__html: data.wpPage.aboutPageOptions.description }} />
             </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <div class="banner-image">
             <img src={data.wpPage.aboutPageOptions.banner.mediaItemUrl} alt="data.wpPage.aboutPageOptions.banner.altText" /> 
          </div>
          <div class="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
             <div class="banner-desc"><div dangerouslySetInnerHTML={{__html: data.wpPage.aboutPageOptions.description }} /> 
                </div>
             <div>
             </div>

          </div>
       </div>
    </div>
    </div>
    </section>

    <section class="brokermid_sec">
      <div class="container position-relative">
       <div class="row">
         <div class="col-sm-12">
            <div dangerouslySetInnerHTML={{__html: data.wpPage.content }} />
          </div>
          </div>
        </div>
    </section>
     
   <GetInTouch
     title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
     text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
   />
  </Layout>)
}
export const query = graphql`
  {
    wpPage(title: {eq: "Deal Hub"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      aboutPageOptions {
        description
        banner {
          mediaItemUrl
          altText
        }
        title
      }
      content
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
export default DealHub