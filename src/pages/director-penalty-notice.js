import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GetInTouchForm from "../components/banner-get-in-touch-form";
import Accordian from "../components/accordian/accordian2"
import TestimonialMain from "../components/testimonial-main2"
import Options from "../components/options/container"
import useInView from "react-cool-inview";
import OurPeople from "../components/our-people-list/our-people2"
import Services from "../components/services/container2"
import GetInTouch from "../components/get-in-touch"
import GetInTouch2 from "../components/get-in-touch2"

const DirectorPenaltyNotice = ({data}) => {
   let whyMG = [];
  data.wpPage.directorpenaltynoticePageOptions.queAndAns.map((d) => {
    return whyMG.push({ title: d.question, description: d.answer });
  })
  let businessData = [];
  data.allWpOurpeople.nodes.map((d) => {
    return businessData.push({ title: d.title, subtitle: d.backInBusiness.designation, text: d.backInBusiness.location, certification: d.backInBusiness.certification, content: d.content, linkedin: d.backInBusiness.linkedin, email: d.backInBusiness.email, phone: d.backInBusiness.phoneNumber, img: d.featuredImage?.node, designationType: d.backInBusiness.designationType, registeredLiquidators: d.backInBusiness.registeredLiquidators });
  })
   const [showModal, setModal] = React.useState(false);
   React.useEffect(() => {
     document.body.classList = 'DirectorPenaltyNoticepage';
     return () => {
       document.body.classList = '';
     }
   }, [])
  const [serviceEnter, changeServiceEnter] = React.useState('')
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25, // Default is 0
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('serviceIn')
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      changeServiceEnter('')
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });
  return (<Layout>
    <Seo title="DirectorPenaltyNotice" />
    <div class="dpn_page">
      <section class="dpnbanner_sec dpnbanner_sec1">
     <div class="container position-relative">
     <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <div class="banner-content innerpage-banner">
             <h1 class="banner-heading">{data.wpPage.directorpenaltynoticePageOptions.title}</h1>
              
             <div class="banner-desc">
             
             <div dangerouslySetInnerHTML={{__html: data.wpPage.directorpenaltynoticePageOptions.description }} />
             </div>
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5  d-none d-sm-none d-md-none d-lg-block">
           <GetInTouch2
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
       </div>
    </div>
    </div>
    </section>   <section class="dpnbanner_sec d-md-block d-lg-none dpnbnr_form">
           <div class="container position-relative"><div class="bnr_form">
               <GetInTouch2
              title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
              text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
            />
           </div> </div> 
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
                    
                   <Link className="btn btn-primary me-5" to="#get-in-touch">Learn More</Link>
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

      <div ref={observe} className={serviceEnter}>
          <Services optionsTitle={data.wpPage.directorpenaltynoticePageOptions.optionsTitle} optionsSubtext={data.wpPage.directorpenaltynoticePageOptions.optionsSubtext}
          />
        </div>
      

      <TestimonialMain
        data={data.wpPage.directorpenaltynoticePageOptions.testimonialTest}
      />
       <Accordian
        title={data.wpPage.directorpenaltynoticePageOptions.faqTitle}
        showEnquireButton={false}
        data={whyMG}
        isPage={'dpn'}
      />
      <section className="recovery-partner dpn_rp_sec">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="whyTitle text-center">{data.wpPage.directorpenaltynoticePageOptions.recoveryTaglineNew}</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {data.wpPage.directorpenaltynoticePageOptions.partnerNew.map((d) => {
              return (<div className={"col-xs-12 col-md-6 col-lg-" + parseInt(12 / data.wpPage.directorpenaltynoticePageOptions.partnerNew.length)}>
                <div className="text-center rp_img">
                  <img src={d.imageNew?.mediaItemUrl} alt={d.imageNew?.altText} className="recovery-partner-img" />
                </div>
                <p className="recovery-partner-title text-center"> {d.titleNew} </p>
              </div>)
            })}
          </div>
        </div>
      </section>

     
      <div class="mgway">

      <OurPeople
        title='Our liquidators'
        text=''
        data={businessData}
        showAll={1}
      />
      </div>
      
      <GetInTouch
          title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
          text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
        />
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
        optionsTitle
        optionsSubtext
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
        testimonialTest {
          testDescription
          testImage {
            altText
            mediaItemUrl
          }
        }
        faqTitle
        queAndAns {
          answer
          question
        }
        recoveryTaglineNew
        partnerNew {
          imageNew {
            altText
            mediaItemUrl
          }
          titleNew
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
          phoneNumber
          registeredLiquidators
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