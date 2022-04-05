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

const MgAcademyPage = ({ data }) => {
  const [showModal, setModal] = React.useState(false);
  const [showModal2, setModal2] = React.useState(false);
  const [ytUrl, setYtUrl] = React.useState('');
  const setVideoUrl = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    setYtUrl((match&&match[7].length==11)? match[7] : false);
    setModal(true);
  }
  return (<div className="service insights">
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
        setVideoUrl={setVideoUrl}
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

                 <button type="button" onClick={()=>setModal2(true)} data-toggle="modal" data-target="#myModal2">Enquire now</button>
                 
                  
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
    <div id="myModal2" role="dialog" className={showModal2?'in show modal fade':'modal fade'}>
    <div class="model_inner">
     <div class="popup_dialog">
         <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" onClick={()=>setModal2(false)}>&times;</button>
         <div className="popup_body">
         <div className="form_pp">
                 <div id="wufoo-w1f3tm5u0u9na2v"><iframe title="Embedded Wufoo Form" id="wufooFormw1f3tm5u0u9na2v" className="wufoo-form-container" height="1451" allowtransparency="true" frameborder="0" scrolling="no" src="https://australiandebtsolvers.wufoo.com/embed/w1f3tm5u0u9na2v/def/embedKey=w1f3tm5u0u9na2v868469&amp;entsource=wordpress&amp;referrer=http%3Awuslashwuslashlocalhostwuslashcitiportwuslashwp-adminwuslashpost.php%3Fpost%3D256%26action%3Dedit"><a href="https://australiandebtsolvers.wufoo.com/forms/w1f3tm5u0u9na2v/" title="html form">Fill out my Wufoo form!</a></iframe></div></div>
         </div>
         
       </div>

     </div></div>
   </div>
    <div id="myModal" role="dialog" className={showModal?'in show modal fade':'modal fade'}>
      <div class="model_inner">
        <div class="popup_dialog">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" onClick={()=>setModal(false)}>&times;</button>
            <div class="popup_body">
              <div class="video_ratio">
              <iframe class="embed-responsive-item" src={'https://www.youtube.com/embed/'+ytUrl+'?autoplay=1&amp;amp;modestbranding=1&amp;amp;showinfo=0'} id="video" allowscriptaccess="always"></iframe>
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
        incubatorProgramFormCode
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
