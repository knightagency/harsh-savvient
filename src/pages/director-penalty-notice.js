import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouchForm from "../components/banner-get-in-touch-form";
import Accordian from "../components/accordian/accordian"
import TestimonialMain from "../components/testimonial-main"

const DirectorPenaltyNotice = ({data}) => {
   const [showModal, setModal] = React.useState(false);
   React.useEffect(() => {
     document.body.classList = 'DirectorPenaltyNoticepage';
     return () => {
       document.body.classList = '';
     }
   }, [])
  return (<Layout>
    <Seo title="DirectorPenaltyNotice" />
    <div class="dpn_page">
      <section id="banner-section" class="identi_bannersec">
     <div class="container position-relative">
     <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <div class="banner-content innerpage-banner">
             <h1 class="banner-heading">{data.wpPage.directorpenaltynoticePageOptions.title}</h1>
              
             <div class="banner-desc d-none d-sm-none d-md-none d-lg-block">
             
             <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description }} />
             </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <div class="banner-image">
             <img src={data.wpPage.directorpenaltynoticePageOptions.banner.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.banner.altText" />
          </div>
          <div class="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
             <div class="banner-desc"><div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description }} /></div>

          </div>
       </div>
    </div>
    </div>
    </section>
      <section id="vCFO" class="banners curve-left bhc_sec wdpn_section">
       <div class="container">
          <div class="row">
             <div class="col-sm-10 col-md-10 col-lg-10 offset-sm-1 offset-md-1 offset-lg-1">
                <div class="image-warpper">
                <div class="vid_play"><img class="img-fluid" src={data.wpPage.directorpenaltynoticePageOptions.banner1.mediaItemUrl} alt="data.wpPage.directorpenaltynoticePageOptions.banner1.altText"/>

                </div>
                </div>
                <div class="ins-content2">
                   <h2 class="ins-banner-heading2">{data.wpPage.directorpenaltynoticePageOptions.title1}</h2>
                   <div class="ins-banner-details2"><div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description1 }} /></div>
                    
                   <Link className="btn btn-primary me-5"  target="_blank" to="https://calendly.com/davidhill-mackaygoodwin/30min?month=2022-03">Learn More</Link>
                </div>
             </div>
          </div>
       </div>
    </section>
      <Accordian
            title={data.wpPage.directorpenaltynoticePageOptions.typesTitle}
            showEnquireButton={false}
            data={data.wpPage.directorpenaltynoticePageOptions.typesPoints}
            bgColor={'#1C5E48'}
            textColor={'#EBE9DE'}
            textHoverColor={"#DBFD90"}
          />

      <TestimonialMain
        data={data.wpPage.directorpenaltynoticePageOptions.testimonial}
      />

      <section className="recovery-partner">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="whyTitle text-center">{data.wpPage.directorpenaltynoticePageOptions.recoveryTagline}</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.directorpenaltynoticePageOptions.partner.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.directorpenaltynoticePageOptions.partner.length)}>
                <div className="text-center">
                  <img src={d.image.mediaItemUrl} alt={d.image.altText} className="recovery-partner-img" />
                </div>
                <p className="recovery-partner-title text-center"> {d.title} </p>
              </div>)
            })}
          </div>
        </div>
      </section>
      
    </div>
</Layout>)
}
export const query = graphql`
  {
    wpPage(title: {eq: "Director Penalty Notice"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      directorpenaltynoticePageOptions {
        description
        banner {
          mediaItemUrl
          altText
        }
        title
        title1
        banner1{
          mediaItemUrl
          altText
        }
        description1
        typesTitle
        typesPoints {
          description
          fieldGroupName
          title
        }
        testimonial {
          description
          image {
            altText
            mediaItemUrl
          }
        }
        recoveryTagline
        partner {
          image {
            altText
            mediaItemUrl
          }
          title
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
          }
        }
      }
    }
  }
`
export default DirectorPenaltyNotice