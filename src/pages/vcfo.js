import * as React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Events from "../components/events/upcoming"
import GetInTouch from "../components/get-in-touch"

const Vcfo = ({data}) => {
   const [showModal, setModal] = React.useState(false);
   React.useEffect(() => {
     document.body.classList = 'identifixpage';
     return () => {
       document.body.classList = '';
     }
   }, [])
  return (<Layout>
    <Seo title="vCFO" />
    <section id="banner-section" class="identi_bannersec">
     <div class="container position-relative">
     <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-5 col-xl-4">
          <div class="banner-content innerpage-banner">
             <h1 class="banner-heading">{data.wpPage.vcfoPageOptions.title}</h1>
              
             <div class="banner-desc d-none d-sm-none d-md-none d-lg-block">
                <div dangerouslySetInnerHTML={{__html: data.wpPage.vcfoPageOptions.description }} />
             
             </div>
              
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <div class="banner-image">
             <img src={data.wpPage?.vcfoPageOptions.banner.mediaItemUrl} alt={data.wpPage?.vcfoPageOptions.banner.altText} />
          </div>
          <div class="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
             <div class="banner-desc"><div dangerouslySetInnerHTML={{__html: data.wpPage.vcfoPageOptions.description }} /></div>
             <div>

              </div>

          </div>
       </div>
    </div>
    </div>
    </section>
    <section id="packages-section" class="packages_section">
        <div className="ps_top">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div dangerouslySetInnerHTML={{__html: data.wpPage.vcfoPageOptions.mainContent }} />
                    </div>
                </div>
            </div>
        </div>
        <div className="ps_bot">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2>{data.wpPage.vcfoPageOptions.packagesTitle}</h2>
                    </div>
                </div>
                <div class="row">
                    {data.wpPage.vcfoPageOptions.packages.map((plan, index) => {
                    return <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                        <div className="pack_inner">
                            <h4>{plan.planName}</h4>
                            <h3>{plan.price}</h3>
                            <p>{plan.perText}</p>
                            <div dangerouslySetInnerHTML={{__html: plan.content }} />
                            <div className="gs_btn"><a href="{plan.buttonLink}">{plan.buttonText}</a></div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    </section>
    <Events
        title={''}
        data={data.allWpEvent.nodes}
        btn={true}
      />
  <GetInTouch
     title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
     text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
   />
   <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
    <div class="model_inner">
     <div class="popup_dialog">
         <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
         <div class="popup_body">
                 <div class="video_ratio">
                 <div dangerouslySetInnerHTML={{__html: data.wpPage?.vcfoPageOptions.video }} />
                     </div>
         </div>
         
       </div>

     </div></div>
   </div>
</Layout>)
}
export const query = graphql`
  {
    wpPage(title: {eq: "vCFO"}) {
      metaFields {
        metaDescription
        metaTitle
      }
      vcfoPageOptions {
        description
        banner {
          mediaItemUrl
          altText
        }
        title
        mainContent,
        packagesTitle,
        packages{
            planName,
            price,
            perText,
            content,
            buttonText,
            buttonLink
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
    allWpEvent(sort: {order: DESC, fields: date}) {
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
export default Vcfo