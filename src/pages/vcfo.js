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
             <h1 class="banner-heading">Flexible pricing</h1>
              
             <div class="banner-desc d-none d-sm-none d-md-none d-lg-block">
                <div>Mackay Goodwin vCFO services are completely flexible and tailored to your business based on where you’re at in the business and what services you could benefit from. With modern technology, our unique Indentifix Cloud platform and our highly awarded advisory services, we can provide you with expert support from anywhere in Australia.</div>
             
             </div>
              
          </div>
       </div>
       <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7">
          <div class="banner-image">
             <img src="http://cms.mackaygoodwin.com.au/wp-content/uploads/2022/03/identifix_img1.jpg" alt="data.wpPage?.vcfoPageOptions.banner.altText" />
          </div>
          <div class="col-12 d-block d-sm-block d-md-block d-lg-none banner-mdesc">
             <div class="banner-desc"><div>Mackay Goodwin vCFO services are completely flexible and tailored to your business based on where you’re at in the business and what services you could benefit from. With modern technology, our unique Indentifix Cloud platform and our highly awarded advisory services, we can provide you with expert support from anywhere in Australia.</div></div>
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
                        <p>Mackay Goodwin's Identifix Cloud is the anchor of our digital experience—it's an innovative cloud offering that allows us to offer a pro-active vCFO relationship, underpinned by a purpose-built cloud platform. </p>

                        <p>This cloud platform allows us to bring together the best of the ever-growing cloud ecosystem, including our unique Identifix Reporting, which allows us to really turn the dial on the way we interact with our clients and the experience we can give them. </p>

                        <p>Business owners want future-focused advice which enables their growth and success.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="ps_bot">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h2>Our vCFO packages at a glance. No lock ins or surprises, we promise.</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                        <div className="pack_inner">
                            <h4>Grow Plan</h4>
                            <h3>$1,750</h3>
                            <p>per month</p>
                            <ul>
                                <li>Monthly P&L, accounts payable and receivable</li>
                                <li>Monthly review of performanc</li>
                                <li>Monthly reporting pack incl. forward cashflows</li>
                                <li>Monthly CFO meeting to review forward cashflows</li>
                                <li>Updating of forecasts</li>
                                <li>Fortnightly CFO check in</li>
                                <li>2 hrs/month extra support</li>
                            </ul>
                            <div className="gs_btn"><a href="#">Get Started</a></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                        <div className="pack_inner">
                            <h4>GrowPlus Plan</h4>
                            <h3>$2900</h3>
                            <p>per month</p>
                            <ul>
                                <li>Monthly P&L, accounts payable and receivable</li>
                                <li>Monthly review of performance</li>
                                <li>Monthly reporting pack incl. forward cashflows</li>
                                <li>Monthly CFO meeting to review forward cashflows</li>
                                <li>Updating of forecasts</li>
                                <li>Weekly CFO check in</li>
                                <li>6 hrs/month extra support</li>
                            </ul>
                            <div className="gs_btn"><a href="#">Get Started</a></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-4">
                        <div className="pack_inner">
                            <h4>GrowTurbo Plan</h4>
                            <h3>$4900</h3>
                            <p>per month</p>
                            <ul>
                                <li>Financial reporting and forecasting from Grow+ package</li>
                                <li>Rolling 12-month cashflow forecast, updated every six months</li>
                                <li>Monthly analysis of actuals and performance against budget for Board reports</li>
                                <li>Key metric and KPI reporting (working with your systems)</li>
                                <li>Min. half day/week with you</li>
                            </ul>
                            <div className="gs_btn"><a href="#">Get Started</a></div>
                        </div>
                    </div>
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
        mainContent
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