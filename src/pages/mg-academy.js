import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import Events from "../components/events/events"
import GetInTouch from "../components/get-in-touch"

const breadCrumbs = [
  { link: "/", title: "Home" },
  { title: "MG Academy" },
]

const MgAcademyPage = ({ data }) => (
  <div className="service insights">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.news.title}
        subtitle={''}
        text={data.wpPage.news.description}
        bannerImg={data.wpPage.news.image}
        btn={false}
        breadCrumbs={breadCrumbs}
      />
      <Events
        title={''}
        data={data.allWpEvent.nodes}
        btn={false}
      />
      <section id="incubator-program" class="banners curve-left vciso_sec">
       <div class="container">
          <div class="row">
             <div class="col-sm-10 col-md-10 col-lg-10 offset-sm-1 offset-md-1 offset-lg-1">
                <div class="image-warpper">
                 <img class="img-fluid" src={data.wpPage.news.incubatorProgramImage.mediaItemUrl} alt="data.wpPage.news.incubatorProgramImage.altText"/>
                </div>
                <div class="ins-content2">
                 <h2 class="ins-banner-heading2">{data.wpPage.news.incubatorProgramTitle}</h2>
                 <div class="ins-banner-details2">
                    <div dangerouslySetInnerHTML={{__html: data.wpPage.news.incubatorProgramDescription }} />
                 </div>
                 <Link className="btn btn-primary me-5"  to="#get-in-touch">Enquire now</Link>
                  
              </div>
             </div>
          </div>
       </div>
    </section>
      <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />
    </Layout>
  </div>
)

export const query = graphql`
  {
    wpPage(title: {eq: "MG Academy"}) {
      news {
        image {
          altText
          mediaItemUrl
        }
        title
        description
        incubatorProgramTitle
        incubatorProgramImage{
          mediaItemUrl
          altText
        }
        incubatorProgramDescription
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

export default MgAcademyPage
