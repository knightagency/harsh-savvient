import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import Events from "../components/events/events"
import GetInTouch from "../components/get-in-touch"

const breadCrumbs = [
  { link: "/", title: "Home" },
  { link: "/insights/", title: "Insights" },
  { title: "Events" },
]

const EventsPage = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  const [ytUrl, setYtUrl] = React.useState('');
  const [vdUrl, setVdUrl] = React.useState('');
  const setVideoUrl = (url,tp) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    if(tp){
      setVdUrl(url);
    }
    else{
      setYtUrl((match&&match[7].length==11)? match[7] : false);
    }
    setModal(true);
  }
  return (<div className="service insights">
    <Layout>
      <Seo title={data.wpPage.metaFields?.metaTitle} description={data.wpPage.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPage.news.title}
        subtitle={''}
        text={''}
        bannerImg={data.wpPage.news.image}
        btn={false}
        breadCrumbs={breadCrumbs}
      />
      <Events
        title={'Webinars'}
        data={data.allWpEvent.nodes}
        btn={false}
        setVideoUrl={setVideoUrl}
      />
     
      <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />
    </Layout>
    <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
      <div className="model_inner">
        <div className="popup_dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
            <div className="popup_body">
              <div className="video_ratio">
              {vdUrl?<video width="100%" controls><source src={vdUrl} type="video/mp4" />Your browser does not support the video tag.</video>:<iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/'+ytUrl+'?autoplay=1&amp;amp;modestbranding=1&amp;amp;showinfo=0'} id="video" allowscriptaccess="always"></iframe>}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export const query = graphql`
  {
    wpPage(title: {eq: "Events"}) {
      news {
        image {
          altText
          mediaItemUrl
        }
        title
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
    allWpEvent(sort: {order: DESC, fields: eventsOption___eventDate}) {
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
          },
          video {
            mediaItemUrl
          },
          shortDescription
        }
      }
    }
  }
`

export default EventsPage
